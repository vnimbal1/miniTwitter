package com.Twitter.challenge.exception;


public class FollowYourselfException extends RuntimeException {

	public FollowYourselfException(String msg) {
		super(msg);
	}

	public FollowYourselfException(String message, Throwable cause) {
		super(message, cause);
	}

}