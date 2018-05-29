package com.Twitter.challenge.service.impl;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Twitter.challenge.exception.AlreadyFollowingException;
import com.Twitter.challenge.exception.FollowYourselfException;
import com.Twitter.challenge.exception.NotFollowingException;
import com.Twitter.challenge.exception.UnfollowYourselfException;
import com.Twitter.challenge.exception.UserNotFoundException;
import com.Twitter.challenge.model.Messages;
import com.Twitter.challenge.model.People;
import com.Twitter.challenge.repository.Repository;
import com.Twitter.challenge.service.PeopleService;

@Service
public class PeopleServiceImpl implements PeopleService {

	@Autowired
	private Repository repository;

	/**
	 * get all the messages
	 */
	public List<Messages> getAllMessages(String userLoggedIn, String search) {
		List<Messages> messages = repository.getAllMessages(userLoggedIn);
		if (search == null) {
			return messages;
		}
		List<Messages> answer = new ArrayList<>();
		for (Messages m : messages) {
			String msg = m.getContent();
			String[] temp = msg.split("\\s+");
			for (String s : temp) {
				if (s.toLowerCase().equals(search.toLowerCase())) {
					answer.add(m);
					break;
				}
			}
		}
		return answer;
	}

	/**
	 * get all the followers of user logged in
	 */
	public List<People> getAllFollowers(String userLoggedIn) {
		return repository.getAllFollowers(userLoggedIn);
	}

	public List<People> getAllFollowing(String userLoggedIn) {
		return repository.getAllFollowing(userLoggedIn);
	}

	public String unfollow(String userLoggedIn, int userId) {

		int userIdLoggedIn = repository.getPeopleIdByName(userLoggedIn);

		// check if userId exist
		if (!repository.checkIfUserExist(userId)) {
			throw new UserNotFoundException("User with ID " + userId + " does not exist");
		}

		// check if user logged in and user to be unfollowed are not same
		// check if trying to unfollow itself..
		if (userIdLoggedIn == userId) {
			throw new FollowYourselfException("You are trying to unfollow yourself. Not allowed.");
		}
		// check if user is following before unfollowing
		if (!repository.checkIfFollowing(userLoggedIn, userId)) {
			throw new NotFollowingException("You are not following User with ID " + userId);
		}
	
		return repository.unfollow(userIdLoggedIn, userId);
	
	}

	public String follow(String userLoggedIn, int userId) {

		int userIdLoggedIn = repository.getPeopleIdByName(userLoggedIn);

		// check if userId exist
		if (!repository.checkIfUserExist(userId)) {
			throw new UserNotFoundException("User with ID " + userId + " does not exist");
		}
		// check if trying to follow itself..
		if (userIdLoggedIn == userId) {
			throw new UnfollowYourselfException("You are trying to follow yourself. Not allowed.");
		}
		// check if already following
		if (repository.checkIfFollowing(userLoggedIn, userId)) {
			throw new AlreadyFollowingException("You are already following User with ID " + userId);
			// return "You are already following User with ID " + userId;
		}
		return repository.follow(userIdLoggedIn, userId);

	}

	public int getDist(String userLoggedIn, int targetId) {
		if (!repository.checkIfUserExist(targetId)) {
			throw new UserNotFoundException("User with ID " + targetId + " does not exist.");
		}
		int userLoggedInId = repository.getPeopleIdByName(userLoggedIn);
		// check if user logged in is not same as target user
		// if yes then return 0 as distance
		if (userLoggedInId == targetId) {
			return 0;
		}
		// get object of logged in user
		People source = repository.getPeopleFromId(userLoggedInId);
		// hashSet will avoid infinite loops
		HashSet<Integer> set = new HashSet<>();
		int dist = 0;
		ArrayList<LinkedList<People>> result = new ArrayList<LinkedList<People>>();
		LinkedList<People> current = new LinkedList<>();
		current.add(source);
		set.add(source.getId());
		while (current.size() > 0) {
			result.add(current);
			dist++;
			LinkedList<People> parent = current;
			current = new LinkedList<>();
			for (People p : parent) {
				List<People> neighbours = getAllFollowing(p.getName());
				for (People q : neighbours) {
					if (q.getId() == targetId) {
						return dist;
					}
					if (!set.contains(q.getId())) {
						current.add(q);
						set.add(q.getId());
					}
				}
			}
		}
		// -1 denotes no possible route between logged user and target user
		return -1;
	}

	@Override
	public List<People> getAllNotFollowing(String userLoggedIn) {
		return repository.getAllNotFollowing(userLoggedIn);
	}

	@Override
	public List<Map<String, Object>> getPopular() {
		List<Map<String, Object>> list = repository.getPopular();
		return repository.getPopular();
	}

}
