package com.example.demo.controller;

import com.example.demo.entity.Chat;
import com.example.demo.entity.Member;
import com.example.demo.entity.Room;
import com.example.demo.mapper.MemberMapper;
import lombok.AllArgsConstructor;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;

@AllArgsConstructor
@RestController
public class MainController {

    private MemberMapper memberMapper;

    @GetMapping("/chat-list")
    public List<Room> chatList(String id){
        List<Room> roomList = memberMapper.findChatRoom(id);
        System.out.println("-----------------------chat_list : "+ roomList);
        return memberMapper.findChatRoom(id);
    }
    @GetMapping("/chat/{chat_room_id}")
    public List<Chat> messageList(@PathVariable int chat_room_id){
        System.out.println("-----------------------messageList : "+ memberMapper.findChat(chat_room_id));
        return memberMapper.findChat(chat_room_id);
    }
//    @MessageMapping("/chat/{chat_room_id}")
//    public void sendMessage(@Payload Chat chat, @DestinationVariable int chat_room_id){
//        memberMapper.convertAndSend("/queue/addChatToClient/"+chat_room_id, chat);
//    }

    @PostMapping("/member-join")
    public int memberJoin(Member member){
        System.out.println("-----------------------memberJoin : " + member);
        return memberMapper.joinMember(member);
    }
    @PostMapping("/member-login")
    public Member memberLogin(String member_id, String member_pw){
        System.out.println("-----------------------memberlogin : " + memberMapper.loginMember(member_id, member_pw));
        return memberMapper.loginMember(member_id, member_pw);
    }
}
