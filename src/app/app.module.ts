import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsComponent } from './modules/products/products.component';
import { ReviewsComponent } from './modules/reviews/reviews.component';
import { RatingComponent } from './modules/rating/rating.component';
import { HanabiComponent } from './modules/hanabi/hanabi.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ProductsComponent,
    ReviewsComponent,
    RatingComponent,
    HanabiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
