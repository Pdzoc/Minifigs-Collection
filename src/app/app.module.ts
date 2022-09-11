import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MinifigComponent } from './minifig/minifig.component';
import { DisplayComponent } from './display/display.component';
import { CollectionComponent } from './collection/collection.component';
import { FormsModule } from '@angular/forms';
import { InfoComponent } from './info.component';
import { ThemesComponent } from './themes/themes.component';

@NgModule({
  declarations: [
    AppComponent,
    MinifigComponent,
    DisplayComponent,
    CollectionComponent,
    InfoComponent,
    ThemesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
