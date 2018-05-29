package com.Twitter.challenge.exception;

public class AlreadyFollowingException extends RuntimeException {

	public AlreadyFollowingException(String msg) {
		super(msg);
	}

	public AlreadyFollowingException(String message, Throwable cause) {
		super(message, cause);
	}

}
