package com.withReact.sandr;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ApiController {

    @GetMapping("/api/get")
    public List<String> getData() {
    	List<String> questionList = new ArrayList<String>();
    	questionList.add("API로 전송한 데이터입니다");
    	questionList.add("json으로 변환돼요");
    	questionList.add("지금 이건 리스트 객체");
    	questionList.add(null);
        return questionList;
    }
    
    @PostMapping("/api/post")
    public String saveData(@RequestBody String data) {
        // 받은 데이터를 처리하고 저장하는 로직을 구현합니다.
        System.out.println("Received data: " + data);
        return "Data saved successfully!";
    }
}
