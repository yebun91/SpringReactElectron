package com.example.demo.service;

import com.example.demo.mybatis.dao.MemberDao;
import com.example.demo.mybatis.dto.ChatDto;
import com.example.demo.mybatis.dto.MemberDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MemberServiveImpl implements MemberService {

    private final MemberDao memberDao;
    @Override
    public List<MemberDto> getAllDataList() {
        return memberDao.getAllDataList();
    }

    @Override
    public List<ChatDto> getMemberChat(int id) {
        return memberDao.getMemberChat(id);
    }
}
