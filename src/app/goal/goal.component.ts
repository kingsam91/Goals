import { Component, OnInit } from '@angular/core';
import {Goal}from'../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals:Goal[] = [
    {id:1, name:'Watch finding Nemo',description:'Find an online version and watch merlin find his son'},
    {id:2, name:'Buy Cookies', description:'The standard chunk of Lorem Ipsum used since the 1500s'},
    {id:3, name:'Get new Phone Case', description:'Contrary to popular belief, Lorem Ipsum is not simply random text.'},
    {id:4, name:'Get Dog Food', description:'There are many variations of passages of Lorem Ipsum available'},
    {id:5, name:'shoot the rat', description:'sometimes on purpose (injected humour and the like'},
    {id:6, name:'Plot my world domination plan', description:'It is a long established fact that a reader will be distracted'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
