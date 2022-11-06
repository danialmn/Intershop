import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Output() data = new EventEmitter<{text: string, check: boolean}>();
  inputText: string = '';
  inputCheck: boolean = false;

  constructor() { }

  onAddText(){
    this.data.emit({text:this.inputText, check: this.inputCheck});
    this.inputText = '';
    
  }
}
