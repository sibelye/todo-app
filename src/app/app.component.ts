import { Component, ElementRef } from '@angular/core';
import { CardComponent } from './card/card.component';
import { ApiService } from './api.service';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs';

export interface ITodo{
  name : string;
  order: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component2.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  [x: string]: any;
  title =  "d'information";
  todoArray: ITodo[] = [];
  Agenda: any;
  post: any;

  constructor(private api: ApiService) {}

  addTodo(){ 
//    let nb = this.todoArray.length;
//    this.todoArray.push({order: nb, name: 'lol'});
//    console.log(this.todoArray)
    var data = {
      commentaires: "",
    };
    this.api.postAgenda(data)
    .subscribe(res => {
      this.todoArray.push(res);
    }, err => {
      console.log("erreur");
    });
  }

  getIndexFromCoord(x, y) {
    var height = 240;
    var width = 405;
    var i = 0;
    var j = 0;
    var newIndex = 0;
    console.log(x, y);
    console.log("x: ",Math.round(x / width));
    i = Math.round(x / width)
    console.log("y: ",Math.round(y / height));
    j = Math.round(y / height);
    if (i < 0)
      newIndex = newIndex - 1;
    else if (i > 0)
      newIndex = newIndex + 1;
    if (j < 0)
      newIndex = newIndex + (2*j);
    else if (j>0)
      newIndex = newIndex + (2*j);
    console.log(newIndex);
    return newIndex;
  }

  dragEnd(event, todo) {
    var diffIndex = this.getIndexFromCoord(event.x, event.y);
    var oldTodo = todo;
    var currentIndex = this.todoArray.indexOf(todo);
    var newIndex = currentIndex + diffIndex;
    this.todoArray.splice(currentIndex, 1);
    this.todoArray.splice(newIndex, 0, oldTodo);
  }

 /*delete item*/
  deleteItem(todo){
    for(let i=0 ;i<= this.todoArray.length ;i++){
      if(todo== this.todoArray[i]){
        this.todoArray.splice(i,1)
    }
   }
  }

  ngOnInit() {
    this.api.getAgenda()
      .subscribe(res => {
        console.log(res);
        this.todoArray = res;
      }, err => {
        console.error(err);
      });
  }
}