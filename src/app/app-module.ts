import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProductsComponent } from './components/products/products.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { ProductFilterPipe } from './pipes/product-filter-pipe';


@NgModule({
  declarations: [
    App, NavbarComponent, ProductsComponent, FooterComponent, ProductFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),provideHttpClient()
  ],
  bootstrap: [App]
})
export class AppModule { }
