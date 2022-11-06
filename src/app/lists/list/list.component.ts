import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() todoTexts: {todoText: string, todoCheck: boolean}[];
  
  constructor() { }

  ngOnInit(): void {
  }

  onRemove(id : number){
    this.todoTexts.splice(id, 1);
  }

  onCheck(id : number){
    this.todoTexts[id].todoCheck = !this.todoTexts[id].todoCheck;
  }

}
