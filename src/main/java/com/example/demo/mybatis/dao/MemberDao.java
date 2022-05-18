package com.example.demo.mybatis.dao;

import com.example.demo.mybatis.dto.ChatDto;
import com.example.demo.mybatis.dto.MemberDto;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Mapper
public interface MemberDao{
    List<MemberDto> getAllDataList();
    List<ChatDto> getMemberChat(int id);
}
