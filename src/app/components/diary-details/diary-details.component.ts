import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Diary } from 'src/app/models/diary';

@Component({
  selector: 'app-diary-details',
  templateUrl: './diary-details.component.html',
  styleUrls: ['./diary-details.component.css']
})
export class DiaryDetailsComponent implements OnInit {
  @Input() diary: Diary;
  @Output() isComplete = new EventEmitter<boolean>();

  diaryDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
