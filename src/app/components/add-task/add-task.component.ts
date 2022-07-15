import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string;
  date: string;
  time: string;
  reminder: boolean = false;
  subscription:Subscription;
  showAddTask:boolean;

  constructor(private uiService:UiService) {
    this.subscription = this.uiService
    .onToggle()
    .subscribe( (value) => (this.showAddTask = value));
   }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.text){
      alert('Please add a task!');
      return;
    }

    console.log(this.date);
    console.log(this.time);

    const newTask = {
      text: this.text,
      date: this.date,
      time: this.time,
      reminder: this.reminder
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.date = '';
    this.time = '';
    this.reminder = false;
  }
}
