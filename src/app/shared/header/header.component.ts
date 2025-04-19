import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  tasks: string[] = [];
  addTask(task: string): void {
    this.tasks.push(task);
  }
  removeTask(task: string): void {
    this.tasks = this.tasks.filter((t) => t !== task);
  }
}
