import { Component, Input, OnInit } from '@angular/core';
import { Offering } from '@models/offering';

@Component({
  selector: 'app-promoted-offering',
  templateUrl: './promoted-offering.component.html',
  styleUrls: ['./promoted-offering.component.scss']
})
export class PromotedOfferingComponent implements OnInit {
  @Input() offering: Offering;

  constructor() { }

  ngOnInit() {
  }

}
