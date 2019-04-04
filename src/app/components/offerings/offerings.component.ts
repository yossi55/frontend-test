import { Component, OnInit } from '@angular/core';
import { ApiService } from '@services/api.service';
import { Offering } from '@models/offering';

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html'
})
export class OfferingsComponent implements OnInit {
  promotedOffering: Offering;
  offerings: Array<Offering>;
  isLoading: boolean;

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.isLoading = true;
    this.apiService.getOfferings().subscribe(res => {
      this.promotedOffering = res.offerings[0];
      this.offerings = [
        res.offerings[0],
        res.offerings[0],
        res.offerings[0],
      ];
      this.isLoading = false;
    });
  }

}
