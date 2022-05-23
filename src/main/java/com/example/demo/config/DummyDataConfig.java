package com.example.demo.config;

import com.example.demo.entity.Chat;
import com.example.demo.entity.Member;
import com.example.demo.repository.ChatRepository;
import com.example.demo.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.util.Date;
import java.util.Random;

@Configuration
@RequiredArgsConstructor
public class DummyDataConfig implements CommandLineRunner {
    Random random = new Random();
    private final MemberRepository memberRepository;
    private final ChatRepository chatRepository;

    String[] name = {"가", "나", "다", "라", "마"};
    String[] id = {"아이디1", "아이디2", "아이디3", "아이디4", "아이디5", "아이디6"};
    String[] pw = {"비번1", "비번2", "비번3", "비번4", "비번5", "비번6"};
    String[] message = {"안녕하세요", "반갑습니다", "메세지입니다", "랜덤입니다", "모르겠습니다", "집에가고싶다"};

    @Override
    public void run(String... args) throws Exception {
        int numLength = 10;

        if (!memberRepository.findById(1L).isPresent()) {
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
            for (int i = 0 ; i<numLength; i++){
                Chat chat = chatRepository.save(
                        Chat.builder()
                                .chat_room_id(random.nextInt(numLength)+1)
                                .message(message[random.nextInt(message.length)])
                                .send_date(new Date()).build()
                );
            }
        }
    }
}
