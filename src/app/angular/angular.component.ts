import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {TodoVO} from '../domain/todo.vo';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
  animations: [
    trigger('flyInOut', [
      state('In', style({opacity: 1, transform: 'translate(0, 0)'})),
      transition('void => *', [
        style({transform: 'translate(-100%, 0)'}),
        animate(300)
      ]),
    ])
  ]
})
export class AngularComponent implements OnInit {
  todoList: Array<TodoVO>; // todo를 가져오기 위한 객체
  newTodo: TodoVO = new TodoVO(); // todo추가를 위한 객체

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getTodoList();
  }

  getTodoList() {
    this.userService.getTodoList().subscribe((data: Array<TodoVO>) => {
      console.log(data);
      this.todoList = data;
    });
  }

  addTodo() {
    // console.log("ngTOdo");
     this.userService.addTodo(this.newTodo).subscribe((data: TodoVO) => this.todoList.unshift(data));
  }
}
