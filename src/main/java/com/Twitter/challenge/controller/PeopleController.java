package com.Twitter.challenge.controller;

import java.security.Principal;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Twitter.challenge.model.Messages;
import com.Twitter.challenge.model.People;
import com.Twitter.challenge.service.PeopleService;

@RestController
@EnableTransactionManagement
@RequestMapping("people")
public class PeopleController {

	@Autowired
	private PeopleService peopleService;

	@RequestMapping(method = RequestMethod.GET, value = "messages")
	public List<Messages> getAllMsg(Principal principal,
			@RequestParam(value = "search", required = false) String search) {
		String userLoggedIn = principal.getName();
		return peopleService.getAllMessages(userLoggedIn, search);
	}

	@RequestMapping(method = RequestMethod.GET, value = "followers")
	public List<People> getAllFollowers(Principal principal) {
		String userLoggedIn = principal.getName();
		return peopleService.getAllFollowers(userLoggedIn);
	}

	@RequestMapping(method = RequestMethod.GET, value = "following")
	public List<People> getAllFollowing(Principal principal) {
		String userLoggedIn = principal.getName();
		return peopleService.getAllFollowing(userLoggedIn);
	}

	@RequestMapping(method = RequestMethod.GET, value = "getAllNotFollowing")
	public List<People> getAllNotFollowing(Principal principal) {
		String userLoggedIn = principal.getName();
		return peopleService.getAllNotFollowing(userLoggedIn);
	}

	@RequestMapping(method = RequestMethod.GET, value = "unfollow/{userId}")
	public String unfollow(Principal principal, @PathVariable int userId) {
		System.out.println("unfollow called");
		String userLoggedIn = principal.getName();
		return peopleService.unfollow(userLoggedIn, userId);
	}

	@RequestMapping(method = RequestMethod.GET, value = "follow/{userId}")
	public String follow(Principal principal, @PathVariable int userId) {
		String userLoggedIn = principal.getName();
		return peopleService.follow(userLoggedIn, userId);
	}

	@RequestMapping(method = RequestMethod.GET, value = "distance/{userId}")
	public int getDistance(Principal principal, @PathVariable int userId) {
		String userLoggedIn = principal.getName();
		return peopleService.getDist(userLoggedIn, userId);
	}

	@RequestMapping(method = RequestMethod.GET, value = "popular")
	public List<Map<String, Object>> getPopular() {
		return peopleService.getPopular();
	}

}
