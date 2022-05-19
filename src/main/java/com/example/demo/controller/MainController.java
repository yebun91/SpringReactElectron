package com.example.demo.controller;

import com.example.demo.entity.Chat;
import com.example.demo.entity.Member;
import com.example.demo.mapper.MemberMapper;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@AllArgsConstructor
@RestController
public class MainController {

    private MemberMapper memberMapper;

    @GetMapping("/chat-list")
    public List<Member> chatList(){
        return memberMapper.findData();
    }

    @GetMapping("/chat/{id}")
    public List<Chat> messageList(@PathVariable int id){
        System.out.println(id);
        return memberMapper.findChatData(id);
    }
}
