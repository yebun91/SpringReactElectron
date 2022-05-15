package com.example.demo.controller;

import com.example.demo.mybatis.dto.ChatDto;
import com.example.demo.mybatis.dto.MemberDto;
import com.example.demo.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RequiredArgsConstructor
@RestController
public class MainController {

    private final MemberService service;

    @GetMapping("hello")
    public List<MemberDto> Hello(){
        return service.getAllDataList();
    }

    @GetMapping("chat")
    public List<ChatDto> chatList(int id){
        List<ChatDto> dd = service.getMemberChat(id);
        for(ChatDto dto : dd){
            System.out.println(dto);
        }
        return service.getMemberChat(id);
    }
}
