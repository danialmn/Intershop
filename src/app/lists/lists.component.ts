import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {
  @Input() todoLists:{todoText: string, todoCheck: boolean}[];
  constructor() { 
    console.log(this.todoLists);
  }

  ngOnInit(): void {
  }

}
