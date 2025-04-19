import { Component, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  tasks: string[] = [];
  addTask(task: string): void {
    this.tasks.push(task);
  }
  removeTask(task: string): void {
    this.tasks = this.tasks.filter((t) => t !== task);
  }
}
