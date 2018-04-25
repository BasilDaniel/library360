import { Routes } from '@angular/router'
import { FormComponent } from './form/form.component';
import { PlayerComponent } from './player/player.component';
import { PanoListComponent } from './pano/panoList/panoList.component';
export const appRoutes: Routes = [
{path: 'form', component: FormComponent},
{path: 'player', component: PlayerComponent},
{path: 'panoList', component: PanoListComponent}
]