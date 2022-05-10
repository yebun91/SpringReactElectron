package com.example.demo.controller;

import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @GetMapping("hello")
    public JSONObject Hello(){
        JSONObject obj = new JSONObject();
        obj.put("name", "유쥬");
        obj.put("gender", "여");
        obj.put("age", 3);
        return obj;
    }
}
