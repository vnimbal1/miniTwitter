package com.Twitter.challenge.service;


import java.util.List;
import java.util.Map;

import com.Twitter.challenge.model.Messages;
import com.Twitter.challenge.model.People;

public interface PeopleService {

	List<Messages> getAllMessages(String userLoggedIn, String search);

	List<People> getAllFollowers(String userLoggedIn);

	List<People> getAllFollowing(String userLoggedIn);

	String unfollow(String userLoggedIn, int userId);

	String follow(String userLoggedIn, int userId);

	int getDist(String userLoggedIn, int userId);

	List<People> getAllNotFollowing(String userLoggedIn);

	List<Map<String, Object>> getPopular();

}
