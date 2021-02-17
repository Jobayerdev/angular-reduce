import { Component } from '@angular/core';
import { Todo } from './model/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp';
  todos: Todo[] = [
    new Todo(1, 'Angular'),
    new Todo(2, 'Junior to Senior Dev'),
    new Todo(3, 'Database Design'),
  ];

  onAdded = (title: string) => {
    this.todos.push({
      id: Math.random() * 10,
      title,
    });
  };
  onDelete = (idx: number) => {
    this.todos.splice(idx, 1);
  };
}
