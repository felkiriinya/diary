import { Component, OnInit } from '@angular/core';
import { Diary } from 'src/app/models/diary';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {
    diaries: Diary[]=[
        new Diary(1, 'Travel Goals', ' One look at travel bloggers on Instagram has you adding new locations on the regular. Lets be honest: You need to get your passport stamped ASAP.',new Date(2020,3,14)),
       
        new Diary(2,'Cooked ','Made a new dish using fish',new Date(2022,1,12)),
        new Diary(3,'Outdoors','went out on a walk and took nice pictures',new Date(2023,0,18)),
        new Diary(4,'Code','Still Learning angular',new Date(2020,2,14)),
        
    ];
    toggleDetails(index){
        this.diaries[index].showDescription = !this.diaries[index].showDescription;
      }
    deleteDiary(isComplete, index){
        if (isComplete) {
          let toDelete = confirm(`Are you sure you want to delete ${this.diaries[index].name}?`)
    
          if (toDelete){
            this.diaries.splice(index,1)
          }
        }
      }
      addNewDiary(diary){
        let diaryLength = this.diaries.length;
        diary.id =diaryLength+1;
        diary.completeDate = new Date(diary.completeDate)
        this.diaries.push(diary)
      }

  constructor() { }

  ngOnInit(){
  }

}
