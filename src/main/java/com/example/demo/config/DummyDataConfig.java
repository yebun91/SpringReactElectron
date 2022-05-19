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
    String[] hobby = {"불멍때리기", "게임하기", "산책하기", "카페가기", "아무것도 하지 않기", "맛집탐방"};
    String[] message = {"안녕하세요", "반갑습니다", "메세지입니다", "랜덤입니다", "모르겠습니다", "집에가고싶다"};

    @Override
    public void run(String... args) throws Exception {
        int numLength = 10;

        if (!memberRepository.findById(1L).isPresent()) {
            for (int i = 0 ; i<numLength; i++){
                Member member = memberRepository.save(
                        Member.builder()
                                .age(random.nextInt(numLength)+1)
                                .hobby(hobby[random.nextInt(hobby.length)])
                                .name(name[random.nextInt(name.length)]).build()
                );
                Chat chat = chatRepository.save(
                        Chat.builder()
                                .chat_room_id(random.nextInt(numLength)+1)
                                .message(message[random.nextInt(hobby.length)])
                                .send_date(new Date()).build()
                );
            }
        }
    }
}
