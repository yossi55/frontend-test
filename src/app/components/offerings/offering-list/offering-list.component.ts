import { Component, Input, OnInit } from '@angular/core';
import { Offering } from '@models/offering';

@Component({
  selector: 'app-offering-list',
  templateUrl: './offering-list.component.html',
  styleUrls: ['./offering-list.component.scss']
})
export class OfferingListComponent implements OnInit {
  @Input() offerings: Array<Offering>;

  constructor() {
  }

  ngOnInit() {
  }

}
