import { Component, OnInit } from '@angular/core';
import { faGavel, faExchangeAlt, faUsers, faCogs } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  faGavel = faGavel;
  faExchangeAlt = faExchangeAlt;
  faUsers = faUsers;
  faCogs = faCogs;

  constructor() { }

  ngOnInit() {
  }

}
