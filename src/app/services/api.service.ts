import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OfferingApiResponse } from '@models/offering-api-response';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'http://private-1b3550-phpbackend.apiary-mock.com/';

  constructor(private httpClient: HttpClient) { }

  public getOfferings() {
    return this.httpClient.get<OfferingApiResponse>(`${this.apiURL}/offerings`);
  }
}
