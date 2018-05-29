package com.Twitter.challenge.model;


public class Followers {

	private int id;
	private int person_id;
	private int follower_person_id;

	public Followers(int id, int person_id, int follower_person_id) {
		this.id = id;
		this.person_id = person_id;
		this.follower_person_id = follower_person_id;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getPerson_id() {
		return person_id;
	}

	public void setPerson_id(int person_id) {
		this.person_id = person_id;
	}

	public int getFollower_person_id() {
		return follower_person_id;
	}

	public void setFollower_person_id(int follower_person_id) {
		this.follower_person_id = follower_person_id;
	}

}
