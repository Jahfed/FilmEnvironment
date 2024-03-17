import { Routes } from '@angular/router';
import { ProductionListComponent } from './container/dashboard/production/production.component';
import { CrewListComponent } from './container/dashboard/apps/crew-list/crew-list.component';
import { ScriptreaderComponent } from './container/dashboard/preproduction/scriptreader/scriptreader.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { CalendarComponent } from './container/dashboard/apps/calendar/calendar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

export const routes: Routes = [
    { 'path': '', redirectTo: 'Login', pathMatch: 'full' },
    { 'path': 'Login', component: LoginComponent },
    {
        'path': '', component: DashboardComponent, children: [
            { 'path': 'Production', component: ProductionListComponent },
            { 'path': 'Crew', component: CrewListComponent },
            { 'path': 'Script', component: ScriptreaderComponent },
            { 'path': 'Planning', component: ProductionListComponent },
            { 'path': 'Calendar', component: CalendarComponent }
        ]
    },
    {
        'path': ':production', component: DashboardComponent, children: [
            { 'path': 'Crew', component: CrewListComponent },
            { 'path': 'Script', component: ScriptreaderComponent },
            { 'path': 'Planning', component: ProductionListComponent },
            { 'path': 'Calendar', component: CalendarComponent }
        ]
    },
    {
        'path': '**', pathMatch: 'full', component: PagenotfoundComponent
    }
];
