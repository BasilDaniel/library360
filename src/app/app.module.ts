import { PanoImgResolver } from './_resolvers/panoImg.resolver';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { PlayerComponent } from './player/player.component';
import { PanoListComponent } from './panoList/panoList.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { NavComponent } from './nav/nav.component';
import { HttpService } from './_services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { NameFilterPipe } from './nameFilter.pipe';
import { CheckedPipe } from './checked.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PlayerComponent,
    PanoListComponent,
    NavComponent,
    NameFilterPipe,
    CheckedPipe
],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpService,
    PanoImgResolver
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
