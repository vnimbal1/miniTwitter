package com.Twitter.challenge.exception;

public class UserNotFoundException extends RuntimeException {

	public UserNotFoundException(String msg) {
		super(msg);
	}

	public UserNotFoundException(String message, Throwable cause) {
		super(message, cause);
	}

}