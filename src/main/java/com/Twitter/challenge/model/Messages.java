package com.Twitter.challenge.model;

public class Messages {

	private int id;
	private int person_id;
	private String content;

	public Messages(int id, int person_id, String content) {
		this.id = id;
		this.person_id = person_id;
		this.content = content;
	}

	public Messages() {
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

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}

}
