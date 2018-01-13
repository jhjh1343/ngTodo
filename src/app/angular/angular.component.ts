import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {TodoVO} from '../domain/todo.vo';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss']
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
    this.userService.addTodo(this.newTodo).subscribe(data => console.log(data));
  }
}
