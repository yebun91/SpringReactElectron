
package com.example.demo.controller;

import com.example.demo.entity.Chat;
import com.example.demo.entity.Member;
import com.example.demo.mapper.MemberMapper;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
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
        return memberMapper.findChatData(id);
    }
    @PostMapping("/member-join")
    public int memberJoin(Member member){
        System.out.println("-----------------------memberJoin : " + member);
        return memberMapper.joinMember(member);
    }
    @PostMapping("/member-login")
    public Member memberLogin(HttpSession session, String member_id, String member_pw){
        return memberMapper.loginMember(member_id, member_pw);
    }
}