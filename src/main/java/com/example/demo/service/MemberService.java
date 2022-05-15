package com.example.demo.service;

import com.example.demo.mybatis.dto.ChatDto;
import com.example.demo.mybatis.dto.MemberDto;

import java.util.List;

public interface MemberService {
    List<MemberDto> getAllDataList();
    List<ChatDto> getMemberChat(int id);
}
