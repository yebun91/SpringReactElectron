package com.example.demo.controller;

import com.example.demo.entity.Chat;
import com.example.demo.mapper.MemberMapper;
import lombok.AllArgsConstructor;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.web.bind.annotation.RestController;

@AllArgsConstructor
@RestController
public class ChatController {

    private MemberMapper memberMapper;
    private final SimpMessagingTemplate template;

    //채팅 컨트롤러 (stomp)
    @MessageMapping("/chat/chatting") //클라이언트에서 수신되는 곳
    public void chatController(Chat chat) {
        //로그를 저장
        memberMapper.sendMessage(chat.getMessage(), chat.getChat_room_id(), chat.getMember_id());
        template.convertAndSend("/sub/chatting/room/" + chat.getChat_room_id(),
                memberMapper.findChat(chat.getChat_room_id())); // 클이언트로 전송
    }
}