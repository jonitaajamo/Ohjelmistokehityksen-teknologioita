package com.example.Harjoitus2.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import com.example.Harjoitus2.bean.*;

import java.util.ArrayList;
import java.util.List;

@Controller
public class HarjoitusController {
    @RequestMapping("/")
    public String home() {
        return "index";
    }
    @RequestMapping("/hello")
    public String hello(@RequestParam String name, Integer age, Model model) {
        String message;
        if(age < 18){
            message = "You are too young";
        }else{
            message = "Welcome " + name + "!";
        }
        model.addAttribute("message", message);
        return "hello";
    }

    @RequestMapping(value = "/students")
    public String students(Model model){
        List<StudentBean> students = new ArrayList<>();
        StudentBean student = new StudentBean();
        student.setFirstName("Joni");
        student.setLastName("Taajamo");
        students.add(student);
        StudentBean student1 = new StudentBean();
        student1.setFirstName("Tommi");
        student1.setLastName("Sloikkeli");
        students.add(student1);
        StudentBean student2 = new StudentBean();
        student2.setFirstName("Tommi");
        student2.setLastName("Tarkki");
        students.add(student2);

        model.addAttribute("students", students);
        return "students";
    }

    List<String> friends = new ArrayList<>();
    @RequestMapping(value = "/friends", method=RequestMethod.GET)
    public String friends(@RequestParam(value="friend", defaultValue = "") String name, Model model){

        friends.add(name);
        System.out.println("Lista juuri nyt: " + friends);

        model.addAttribute("friends", friends);

        return "friends";
    }



}
