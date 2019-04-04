import { Component, OnInit } from '@angular/core';
import {faQuestionCircle, faBell, faEnvelope, faUserCircle, faBuilding } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {
  faQuestionCircle = faQuestionCircle;
  faBell = faBell;
  faEnvelope = faEnvelope;
  faUserCircle = faUserCircle;
  faBuilding = faBuilding;

  constructor() { }

  ngOnInit() {
  }

}
