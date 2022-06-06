package com.example.demo.controller;

import com.example.demo.entity.Chat;
import com.example.demo.entity.Member;
import com.example.demo.entity.Room;
import com.example.demo.mapper.MemberMapper;
import lombok.AllArgsConstructor;

import org.springframework.web.bind.annotation.*;
import java.util.List;

@AllArgsConstructor
@RestController
public class MainController {

    private MemberMapper memberMapper;

    @GetMapping("/chat-list")
    public List<Room> chatList(String id){
        return memberMapper.findChatRoom(id);
    }
    @GetMapping("/chat/{chat_room_id}")
    public List<Chat> messageList(@PathVariable int chat_room_id){
        return memberMapper.findChat(chat_room_id);
    }
    @PostMapping("/chat/sendMessage")
    public int sendMessage(String message, int chat_room_id, String member_id){
        return memberMapper.sendMessage(message, chat_room_id, member_id);
    }
    @PostMapping("/member-join")
    public int memberJoin(Member member){
        return memberMapper.joinMember(member);
    }
    @PostMapping("/member-login")
    public Member memberLogin(String member_id, String member_pw){
        return memberMapper.loginMember(member_id, member_pw);
    }
}
