package com.example.demo.entity;

import lombok.*;
import javax.persistence.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(schema= "yjchoi", name= "member")
@Builder
public class Member {
    @Id
    private String member_id;
    private String member_name;
    private String member_pw;
}
