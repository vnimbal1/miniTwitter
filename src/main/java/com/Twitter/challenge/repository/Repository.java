package com.Twitter.challenge.repository;

import java.util.List;
import java.util.Map;

import com.Twitter.challenge.model.Messages;
import com.Twitter.challenge.model.People;

public interface Repository {

	List<Messages> getAllMessages(String userLoggedIn);

	boolean checkIfUserExist(int id);

	List<People> getAllFollowers(String userLoggedIn);

	boolean checkIfFollowing(String userLoggedIn, int person_id);

	String follow(int userLoggedIn, int userId);

	String unfollow(int userLoggedIn, int userId);

	List<People> getAllFollowing(String userLoggedIn);

	List<People> getAllNotFollowing(String userLoggedIn);

	int getPeopleIdByName(String userLoggedIn);

	List<Map<String, Object>> getPopular();

	People getPeopleFromId(int person_id);
}
