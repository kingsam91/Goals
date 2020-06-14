import { Component, OnInit } from '@angular/core';
import {Goal}from'../goal';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [
    new Goal(1, 'Watch finding Nemo', 'Find an online version and watch merlin find his son',new Date(2020,6,16)),
    new Goal(2,'Buy Cookies','I have to buy cookies for the parrot',new Date(2020,6,19)),
    new Goal(3,'Get new Phone Case','Diana has her birthday coming up soon',new Date(2020,6,21)),
    new Goal(4,'Get Dog Food','Pupper likes expensive snacks',new Date(2020,6,23)),
    new Goal(5, 'shoot the rat','stupid rat keeps urinating on my rags',new Date(2020,6,25)),
    new Goal(6,'Solve math homework','Damn Math',new Date(2020,6,27)),
    new Goal(7,'Plot my world domination plan','Cause I am an evil overlord',new Date(2020,6,29)),
  ];
  
  toggleDetails(index){
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  completeGoal(isComplete, index){
    if (isComplete) {
      this.goals.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
