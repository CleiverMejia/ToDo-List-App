import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-task',
  templateUrl: './item-task.component.html',
  styleUrls: ['./item-task.component.scss'],
  standalone: false
})
export class ItemTaskComponent  implements OnInit {
  @Input() idTask: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() date: Date = new Date();
  @Input() done: boolean = false;

  constructor() { }

  ngOnInit() {}

}
