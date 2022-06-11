package com.example.demo.config;

import com.example.demo.entity.Chat;
import com.example.demo.entity.Member;
import com.example.demo.entity.Room;
import com.example.demo.entity.RoomJoin;
import com.example.demo.repository.ChatRepository;
import com.example.demo.repository.MemberRepository;
import com.example.demo.repository.RoomJoinRepository;
import com.example.demo.repository.RoomRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.util.Date;
import java.util.Random;

@Configuration
@RequiredArgsConstructor
public class DummyDataConfig implements CommandLineRunner {
    private final MemberRepository memberRepository;
    private final ChatRepository chatRepository;
    private final RoomRepository roomRepository;
    private final RoomJoinRepository roomJoinRepository;

    @Override
    public void run(String... args) throws Exception {
        Member member = memberRepository.save(
            Member.builder()
                    .member_id("admin")
                    .member_pw("admin")
                    .member_name("admin").build()
        );
        Member member2 = memberRepository.save(
            Member.builder()
                    .member_id("test")
                    .member_pw("test")
                    .member_name("test").build()
        );
        Member member3 = memberRepository.save(
                Member.builder()
                        .member_id("yujin")
                        .member_pw("yujin")
                        .member_name("yujin").build()
        );
        Member member4 = memberRepository.save(
                Member.builder()
                        .member_id("aa")
                        .member_pw("aa")
                        .member_name("aa").build()
        );
        Chat chat = chatRepository.save(
            Chat.builder()
                    .chat_room_id(1)
                    .message("안녕하세요")
                    .member_id("test")
                    .send_date(new Date()).build()
        );
        Chat chat2 = chatRepository.save(
            Chat.builder()
                    .chat_room_id(1)
                    .message("네 안녕하세요 반갑습니다.")
                    .member_id("admin")
                    .send_date(new Date()).build()
        );
        Chat chat3 = chatRepository.save(
                Chat.builder()
                        .chat_room_id(2)
                        .message("누구있나요?")
                        .member_id("test")
                        .send_date(new Date()).build()
        );
        Room room = roomRepository.save(
            Room.builder()
                    .create_date(new Date()).build()
        );
        Room room2 = roomRepository.save(
                Room.builder()
                        .create_date(new Date()).build()
        );
        RoomJoin roomJoin = roomJoinRepository.save(
            RoomJoin.builder()
                    .member_id("test")
                    .chat_room_id(1).build()
        );
        RoomJoin roomJoin2 = roomJoinRepository.save(
            RoomJoin.builder()
                    .member_id("admin")
                    .chat_room_id(1).build()
        );
        RoomJoin roomJoin3 = roomJoinRepository.save(
                RoomJoin.builder()
                        .member_id("test")
                        .chat_room_id(2).build()
        );
        RoomJoin roomJoin4 = roomJoinRepository.save(
                RoomJoin.builder()
                        .member_id("yujin")
                        .chat_room_id(2).build()
        );

    }
}
