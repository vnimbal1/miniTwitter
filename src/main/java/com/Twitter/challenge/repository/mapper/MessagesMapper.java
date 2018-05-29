package com.Twitter.challenge.repository.mapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import org.springframework.jdbc.core.RowMapper;

import com.Twitter.challenge.model.Messages;

/**
 * mapper class for Message object
 * 
 * @author Viraj
 *
 */
public final class MessagesMapper implements RowMapper<Messages> {
	@Override
	public Messages mapRow(ResultSet rs, int rowNum) throws SQLException {
		Messages msg = new Messages();
		msg.setId(rs.getInt("id"));
		msg.setPerson_id(rs.getInt("person_id"));
		msg.setContent(rs.getString("content"));
		return msg;
	}
}
