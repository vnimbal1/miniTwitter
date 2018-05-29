package com.Twitter.challenge.exception;

public class UnfollowYourselfException extends RuntimeException {

	public UnfollowYourselfException(String msg) {
		super(msg);
	}

	public UnfollowYourselfException(String message, Throwable cause) {
		super(message, cause);
	}

}