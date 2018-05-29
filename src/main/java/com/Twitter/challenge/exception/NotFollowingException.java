package com.Twitter.challenge.exception;

public class NotFollowingException extends RuntimeException {

	public NotFollowingException(String msg) {
		super(msg);
	}

	public NotFollowingException(String message, Throwable cause) {
		super(message, cause);
	}

}