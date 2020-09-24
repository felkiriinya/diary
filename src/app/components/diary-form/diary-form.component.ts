import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Diary } from 'src/app/models/diary';


@Component({
  selector: 'app-diary-form',
  templateUrl: './diary-form.component.html',
  styleUrls: ['./diary-form.component.css']
})
export class DiaryFormComponent implements OnInit {
    newDiary = new Diary(0,"","",new Date());
    @Output() addDiary = new EventEmitter<Diary>();

    submitDiary(){
    this.addDiary.emit(this.newDiary);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
