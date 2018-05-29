package com.Twitter.challenge.repository.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

import com.Twitter.challenge.model.People;


/**
 * mapper class for People object
 * 
 * @author Viraj
 *
 */
public final class PeopleMapper   implements RowMapper<People> {

	@Override
	public People mapRow(ResultSet rs, int rowNum) throws SQLException {
		People ppl = new People();
		ppl.setId(rs.getInt("id"));
		ppl.setHandle(rs.getString("handle"));
		ppl.setName(rs.getString("name"));
		return ppl;
	}
}