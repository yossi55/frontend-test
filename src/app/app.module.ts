import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from '@components/menu/menu.component';
import { OfferingsComponent } from '@components/offerings/offerings.component';
import { TopBarComponent } from '@components/top-bar/top-bar.component';
import { PromotedOfferingComponent } from '@components/offerings/promoted-offering/promoted-offering.component';
import { OfferingListComponent } from '@components/offerings/offering-list/offering-list.component';
import { OfferingListItemComponent } from '@components/offerings/offering-list-item/offering-list-item.component';
import { AtiProgressBarComponent } from '@components/ati-progress-bar/ati-progress-bar.component';
import { NumberToChfPipe } from '@pipes/number-to-chf.pipe';
import { InvestmentTypePipe } from '@pipes/investment-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    OfferingsComponent,
    TopBarComponent,
    PromotedOfferingComponent,
    OfferingListComponent,
    OfferingListItemComponent,
    AtiProgressBarComponent,
    NumberToChfPipe,
    InvestmentTypePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
