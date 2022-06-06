package com.example.demo.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(schema= "yjchoi", name= "room_join")
@Builder
public class RoomJoin {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int join_id;
    private String member_id;
    private int chat_room_id;
}
