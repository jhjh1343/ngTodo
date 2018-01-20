import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {TodoVO} from '../domain/todo.vo';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {ResultVo} from '../domain/result.vo';

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
  // 수정시 담을 콜렉션
  // tempTodoList: Map<number, TodoVO> = new Map<number, TodoVO>(); 이걸 생략함
  tempTodoList = new Map<number, TodoVO>();

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

  // 템플릿 폼을 에디터로 전환
  save (item: TodoVO) {
    item.isEdited = true;

    // 기존값 저장( Shallow copy를 해서 안됨. <> Deep copy를 해야함  그럴려면 new를 해줘야함.)
    const newTodo = new TodoVO();
    newTodo.isFinished = item.isFinished;
    newTodo.todo = item.todo;
    this.tempTodoList.set(item.todo_id, newTodo);
  }

  // 서버에서 삭제
  remove (item: TodoVO, idx: number) {
    const result = confirm("삭제하시겠습니까?");
    if (result) {
      this.userService.removeTodo(item.todo_id).subscribe((data: ResultVo) => {
        if (data.result === 0) {
          // 삭제
          this.todoList.splice(idx, 1);
        }
      });
    }
  }

  // 서버에서 수정
  modify (item: TodoVO) {

  }
  // 에디터를 원래대로 복귀
  restore (item: TodoVO) {
    item.isEdited = false;

    // 기존값 복원
    const todoVo = this.tempTodoList.get(item.todo_id);
    item.isFinished = todoVo.isFinished;
    item.todo = todoVo.todo;
  }

}
