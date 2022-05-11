package com.example.demo.controller;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
public class MainController {
    @GetMapping("hello")
    public List<String> Hello(){
        return Arrays.asList("유주", "버들", "달", "비누");
    }
}
