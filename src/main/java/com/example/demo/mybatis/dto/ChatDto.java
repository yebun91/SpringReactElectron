package com.example.demo.mybatis.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChatDto {
    private Integer id;
    private String user_id;
    private String user_name;
    private Date send_date;
    private Integer room_id;
    private String content;
}
