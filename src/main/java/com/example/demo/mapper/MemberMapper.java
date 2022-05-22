package com.example.demo.mapper;

import com.example.demo.entity.Chat;
import com.example.demo.entity.Member;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;

public interface MemberMapper {
    @Mapper
    List<Member> findData();
    List<Chat> findChatData(int id);
    int joinMember(Member member);
    Member loginMember(String member_id, String member_pw);
}
