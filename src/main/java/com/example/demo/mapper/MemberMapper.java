package com.example.demo.mapper;

import com.example.demo.entity.Chat;
import com.example.demo.entity.Member;
import com.example.demo.entity.Room;
import org.apache.ibatis.annotations.Mapper;
import java.util.List;

public interface MemberMapper {
    @Mapper
    List<Room> findChatRoom(String data); //로그인된 사용자가 참가한 채팅방 리스트를 보여줌
    List<Chat> findChat(int chat_room_id); //채팅방 리스트 중 하나를 클릭 했을 때 그 방에 있는 채팅을 보여줌
    int joinMember(Member member); //회원가입
    Member loginMember(String member_id, String member_pw); //로그인
    int sendMessage(String message, int chat_room_id, String member_id); //채팅보내기
    Room addChatRoom(String id); //채팅방 추가하기
}
