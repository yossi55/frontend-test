import { Component, Input, OnInit } from '@angular/core';
import { Offering } from '@models/offering';

@Component({
  selector: 'app-offering-list-item',
  templateUrl: './offering-list-item.component.html',
  styleUrls: ['./offering-list-item.component.scss']
})
export class OfferingListItemComponent implements OnInit {
  @Input() offering: Offering;
  @Input() blurredImage: boolean;
  @Input() atiColor: string;

  constructor() { }

  ngOnInit() {
  }

}
