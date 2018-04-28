import { Routes } from '@angular/router'
import { FormComponent } from './form/form.component';
import { PlayerComponent } from './player/player.component';
import { PanoListComponent } from './panoList/panoList.component';
import { PanoImgResolver } from './_resolvers/panoImg.resolver';
export const appRoutes: Routes = [
{path: 'form', component: FormComponent},
{path: 'player/:id', component: PlayerComponent, resolve: {panoImg: PanoImgResolver}},
{path: 'panoList', component: PanoListComponent},
{ path: '**', redirectTo: 'form', pathMatch: 'full'}
]