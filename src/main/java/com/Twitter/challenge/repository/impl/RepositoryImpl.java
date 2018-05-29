package com.Twitter.challenge.repository.impl;


import java.util.List;
import java.util.Map;
import javax.sql.DataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.core.namedparam.SqlParameterSource;
import org.springframework.stereotype.Repository;

import com.Twitter.challenge.model.Messages;
import com.Twitter.challenge.model.People;
import com.Twitter.challenge.repository.mapper.MessagesMapper;
import com.Twitter.challenge.repository.mapper.PeopleMapper;

@Repository
public class RepositoryImpl implements com.Twitter.challenge.repository.Repository {

	@Autowired
	private DataSource dataSource;
	private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

	public DataSource getDataSource() {
		return dataSource;
	}

	@Autowired
	public void setDataSource(DataSource dataSource) {
		this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
	}

	public NamedParameterJdbcTemplate getNamedParameterJdbcTemplate() {
		return namedParameterJdbcTemplate;
	}

	public void setNamedParameterJdbcTemplate(NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
		this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
	}

	/**
	 * get all the messages by logged in user and all the people user is
	 * following
	 */
	public List<Messages> getAllMessages(String userLoggedIn) {
		int person_id = getPeopleIdByName(userLoggedIn);
		String sql = "SELECT * FROM Messages where person_id= :person_id or person_id IN (select person_id from followers where follower_person_id =:person_id) order by person_id";
		SqlParameterSource parameterSource = new MapSqlParameterSource("person_id", person_id);
		return namedParameterJdbcTemplate.query(sql, parameterSource, new MessagesMapper());
	}

	/**
	 * get all the followers of logged in userd
	 * 
	 * @param person_id
	 * @return
	 */
	public List<People> getAllFollowers(int person_id) {
		String sql = "SELECT * FROM PEOPLE WHERE ID IN (SELECT FOLLOWER_PERSON_ID FROM Followers where person_id= :person_id) ORDER BY ID ASC";
		SqlParameterSource parameterSource = new MapSqlParameterSource("person_id", person_id);
		return namedParameterJdbcTemplate.query(sql, parameterSource, new PeopleMapper());
	}

	/**
	 * get all the followers
	 */
	public List<People> getAllFollowers(String userLoggedIn) {
		int person_id = getPeopleIdByName(userLoggedIn);
		String sql = "SELECT * FROM PEOPLE WHERE ID IN (SELECT FOLLOWER_PERSON_ID FROM Followers where person_id= :person_id) ORDER BY ID ASC";
		SqlParameterSource parameterSource = new MapSqlParameterSource("person_id", person_id);
		return namedParameterJdbcTemplate.query(sql, parameterSource, new PeopleMapper());
	}

	/**
	 * get all the people logged in user is following
	 */
	public List<People> getAllFollowing(String userLoggedIn) {
		int person_id = getPeopleIdByName(userLoggedIn);
		String sql = "SELECT * FROM PEOPLE WHERE ID IN (SELECT PERSON_ID FROM Followers where FOLLOWER_PERSON_ID= :person_id) ORDER BY ID ASC";
		SqlParameterSource parameterSource = new MapSqlParameterSource("person_id", person_id);
		return namedParameterJdbcTemplate.query(sql, parameterSource, new PeopleMapper());
	}

	/**
	 * unfollow the user
	 */
	public String unfollow(int  follower_person_id, int person_id) {

		String sql2 = "Delete  FROM Followers where person_id = :person_id and follower_person_id=:follower_person_id";
		SqlParameterSource parameterSource = new MapSqlParameterSource("follower_person_id", follower_person_id)
					.addValue("person_id", person_id);
			namedParameterJdbcTemplate.update(sql2, parameterSource);
			return "unfollowed";
	}

	/**
	 * follow the user if not following already
	 */
	public String follow(int follower_person_id, int person_id) {
		String sql2 = "insert into Followers (person_id, follower_person_id) values (:person_id ,:follower_person_id)";
		SqlParameterSource parameterSource = new MapSqlParameterSource("follower_person_id", follower_person_id)
				.addValue("person_id", person_id);
		namedParameterJdbcTemplate.update(sql2, parameterSource);
		return "followed";
	}

	/**
	 * helper method for follow method. checks if user is already followed or
	 * not
	 */
	public boolean checkIfFollowing(String userLoggedIn, int person_id) {
		int follower_person_id = getPeopleIdByName(userLoggedIn);
		String sql = "SELECT count(*) FROM Followers WHERE FOLLOWER_PERSON_ID= :follower_person_id and person_id=:person_id";
		SqlParameterSource parameterSource = new MapSqlParameterSource("follower_person_id", follower_person_id)
				.addValue("person_id", person_id);
		int size = namedParameterJdbcTemplate.queryForObject(sql, parameterSource, Integer.class);
		if (size == 1) {
			return true;
		}
		return false;
	}

	/**
	 * get all the users except the ones that user is following
	 */
	public List<People> getAllNotFollowing(String userLoggedIn) {

		int follower_person_id = getPeopleIdByName(userLoggedIn);
		String sql = "SELECT * FROM PEOPLE WHERE ID NOT IN (select person_id from followers f where follower_person_id = :follower_person_id)";
		SqlParameterSource parameterSource = new MapSqlParameterSource("follower_person_id", follower_person_id);
		return namedParameterJdbcTemplate.query(sql, parameterSource, new PeopleMapper());
	}

	/**
	 * get pair of user and most popular follower
	 */
	public List<Map<String, Object>> getPopular() {
		String sql = "select id as PERSON_ID,( select top 1 person_id from followers where person_id In (select follower_person_id from followers where person_id=p.id) group by person_id order by count(follower_person_id)desc,person_id) as BEST from people p ";
		SqlParameterSource parameterSource = new MapSqlParameterSource();
		List<Map<String, Object>> present = namedParameterJdbcTemplate.queryForList(sql, parameterSource);
		return present;
	}

	/**
	 * get People object from user id
	 * 
	 * @param id
	 * @return
	 */
	public People getPeopleFromId(int id) {
		String sql1 = "select * from people where id=:id";
		SqlParameterSource parameterSource = new MapSqlParameterSource("id", id);
		return namedParameterJdbcTemplate.queryForObject(sql1, parameterSource, new PeopleMapper());
	}

	/**
	 * check if user exist in database
	 * 
	 * @param id
	 * @return
	 */
	public int checkIfIdExist(int id) {
		String sql1 = "SELECT id FROM PEOPLE where id = :id";
		SqlParameterSource parameterSource = new MapSqlParameterSource("id", id);
		int person_id = namedParameterJdbcTemplate.queryForObject(sql1, parameterSource, Integer.class);
		return person_id;
	}

	/**
	 * get id by handle
	 */
	public int getPeopleIdByName(String userLoggedIn) {
		String sql1 = "SELECT id FROM PEOPLE where handle = :handle";
		SqlParameterSource parameterSource = new MapSqlParameterSource("handle", userLoggedIn);
		int size = namedParameterJdbcTemplate.queryForObject(sql1, parameterSource, Integer.class);
		return size;
	}

	/**
	 * check if user exists
	 */
	public boolean checkIfUserExist(int id) {
		String sql1 = "SELECT count(*) FROM PEOPLE where id = :id";
		SqlParameterSource parameterSource = new MapSqlParameterSource("id", id);
		int size = namedParameterJdbcTemplate.queryForObject(sql1, parameterSource, Integer.class);
		if (size == 1) {
			return true;
		}
		return false;
	}




}
