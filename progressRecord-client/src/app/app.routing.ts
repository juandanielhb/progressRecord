import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './components/people/people.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';


const routes: Routes = [
    { path: '', component: PeopleComponent },
    { path: 'personas', component: PeopleComponent },
    { path: 'tecnologias', component: TechnologiesComponent }

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
