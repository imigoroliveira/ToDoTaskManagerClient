import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

 tasks: Task[] = [];

  constructor(private TasksService: TasksService) {}

  ngOnInit() {
    this.TasksService.list().subscribe((tasks) =>{
      this.tasks = tasks;
      console.log(tasks);
    });
}
}