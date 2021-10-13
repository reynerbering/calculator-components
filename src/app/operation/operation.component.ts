import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html',
  styleUrls: ['./operation.component.css']
})
export class OperationComponent implements OnInit {

  @Output() opChoice = new EventEmitter<string>();

  operationChoice : string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

  selectAdd(){
    this.operationChoice = "+";
    this.opChoice.emit(this.operationChoice);
  }
  selectSubtract(){
    this.operationChoice = "-";
    this.opChoice.emit(this.operationChoice);
  }
  selectMultiply(){
    this.operationChoice = "*";
    this.opChoice.emit(this.operationChoice);
  }
  selectDivide(){
    this.operationChoice = "/";
    this.opChoice.emit(this.operationChoice);
  }
}
