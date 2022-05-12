package com.example.demo.mybatis.dto;

import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class MemberDto {
    private Long id;
    private String name;
    private int age;
    private String servant;
    private String hobby;

    @Builder
    public MemberDto(long id, String name, int age, String servant, String hobby) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.servant = servant;
        this.hobby = hobby;
    }
}
