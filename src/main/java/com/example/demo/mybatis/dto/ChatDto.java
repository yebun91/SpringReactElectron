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
    private Integer from_id;
    private String content;
    private Integer to_id;
}
