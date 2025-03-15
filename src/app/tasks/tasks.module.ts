import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksService } from './services/tasks/tasks.service';



@NgModule({
  imports: [
    CommonModule
  ],
  providers: [TasksService]
})
export class TasksModule { }
