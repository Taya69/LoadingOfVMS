import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() maxValue: number = 1;
  @Input() currentValue: number = 0;

get percent(): number {return this.currentValue/ this.maxValue * 100}

  constructor() { }

  ngOnInit(): void {
  }

}
