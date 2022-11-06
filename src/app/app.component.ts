import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoListContent: {todoText: string, todoCheck: boolean}[] = [];

  onAddList(inputData: {text: string, check: boolean}){
    this.todoListContent.push({todoText: inputData.text, todoCheck: inputData.check});
    console.log(this.todoListContent);
  }
}

