import { Component } from '@angular/core';


@Component({
  selector: 'app-todo-list-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-list-item.component.html',
  styleUrl: './todo-list-item.component.scss'
})
export class TodoListItemComponent {
  taskTitle = 'Read cup of coffee';
  // taskTitle='';
  isAdmin = false
  isComplete = false;


  completeTask() {
    this.isComplete = true;
  }

  updateTitle(newTitle: string) {
    this.taskTitle = newTitle
  }

  // try adding and use of for loop
  ingredientList = [
    { name: 'noodles', quantity: 1 },
    { name: 'miso broth', quantity: 1 },
    { name: 'egg', quantity: 2 },
  ];

  // transformation of string using event

  announcement = 'Hello Again Angular!'

  // transformText(){


  //   if(this.announcement){
  //     this.announcement=this.announcement.toUpperCase();
  //   }else{
  //     this.announcement=this.announcement;
  //   }
  // }
  transformText() {
    this.announcement = this.announcement ?
      (this.announcement === this.announcement.toUpperCase() ?
        this.announcement.toLowerCase() : this.announcement.toUpperCase())
      : this.announcement;
  }
}
