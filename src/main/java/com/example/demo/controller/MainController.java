package com.example.demo.controller;

import com.example.demo.entity.Chat;
import com.example.demo.entity.Member;
import com.example.demo.mapper.MemberMapper;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;

@AllArgsConstructor
@RestController
public class MainController {

    private MemberMapper memberMapper;

    @GetMapping("hello")
    public List<Member> Hello(){
        return memberMapper.findData();
    }

    @GetMapping("chat")
    public List<Chat> chatList(int id){
        List<Chat> dd = memberMapper.findChatData(id);
        for(Chat dto : dd){
            System.out.println(dto);
        }
        return memberMapper.findChatData(id);
    }
}
