package com.example.demo.controller;

import com.example.demo.mybatis.dto.ChatDto;
import com.example.demo.mybatis.dto.MemberDto;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.lang.reflect.Member;
import java.sql.Date;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@RestController
public class MainController {
    @GetMapping("hello")
    public List<MemberDto> Hello(){
        List<MemberDto> dtoList = new ArrayList<>();
        dtoList.add(MemberDto.builder().id(1).name("유주").age(3).servant("유진").hobby("숨바꼭질하기").build());
        dtoList.add(MemberDto.builder().id(2).name("버들").age(10).servant("소희").hobby("산책하기").build());
        dtoList.add(MemberDto.builder().id(3).name("달").age(3).servant("가원").hobby("공놀이하기").build());
        dtoList.add(MemberDto.builder().id(4).name("비누").age(7).servant("승은").hobby("소면끊기").build());
        dtoList.add(MemberDto.builder().id(5).name("돌이").age(2).servant("은빈").hobby("컬러풀 똥싸기").build());
        return dtoList;
    }

    @GetMapping("chat")
    public List<ChatDto> chatList(Long id){
        System.out.println(id);
        List<ChatDto> chatDtoList = new ArrayList<>();
        chatDtoList.add(new ChatDto(Long.valueOf(1), "누구", "1. message"+id, Date.valueOf(LocalDate.now())));
        chatDtoList.add(new ChatDto(Long.valueOf(2), "누구", "2 .message"+id, Date.valueOf(LocalDate.now())));
        chatDtoList.add(new ChatDto(Long.valueOf(3), "누구", "3 .message"+id, Date.valueOf(LocalDate.now())));
        return chatDtoList;
    }
}
