import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { PlayerComponent } from './player/player.component';
import { PanoComponent } from './pano/pano/pano.component';
import { PanoListComponent } from './pano/panoList/panoList.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes';
import { NavComponent } from './nav/nav.component';
import { HttpService } from './_services/http.service';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PlayerComponent,
    PanoComponent,
    PanoListComponent,
    NavComponent
],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
