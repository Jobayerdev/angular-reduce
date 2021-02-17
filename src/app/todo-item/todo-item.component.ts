import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Todo } from './../model/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todos: Todo[] | undefined;
  @Output() onTodoDelete = new EventEmitter<number>();
  constructor() {}

  ngOnInit(): void {
    console.log(this.todos);
  }
  onDelete = (idx: number) => {
    this.onTodoDelete.emit(idx);
  };
}
