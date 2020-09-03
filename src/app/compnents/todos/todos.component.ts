import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../todo.service';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
})
export class TodosComponent implements OnInit {
  public todos;
  constructor(public todoservice: TodoService) {}

  ngOnInit(): void {
    this.todoservice.gettodo().subscribe((todo) => {
      this.todos = todo;
    });
  }
}
