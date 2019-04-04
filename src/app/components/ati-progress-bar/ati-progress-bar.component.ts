import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ati-progress-bar',
  templateUrl: './ati-progress-bar.component.html',
  styleUrls: ['./ati-progress-bar.component.scss']
})
export class AtiProgressBarComponent implements OnInit {
  @Input() color: string;
  @Input() filledPercentage: number;

  constructor() {
  }

  ngOnInit() {
  }

}
