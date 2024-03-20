import { Routes } from '@angular/router';
import { ProductionListComponent } from './container/dashboard/production/production.component';
import { CrewListComponent } from './container/dashboard/apps/crew-list/crew-list.component';
import { ScriptreaderComponent } from './container/dashboard/preproduction/scriptreader/scriptreader.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './container/dashboard/dashboard.component';
import { CalendarComponent } from './container/dashboard/apps/calendar/calendar.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HoursComponent } from './container/dashboard/apps/administration/hours/hours.component';
import { AddHoursComponent } from './container/dashboard/apps/administration/hours/add-hours/add-hours.component';
import { CallsheetComponent } from './container/dashboard/apps/callsheets/callsheet/callsheet.component';
import { PlanningComponent } from './container/dashboard/apps/planning/planning.component';

export const routes: Routes = [
    { 'path': 'CS', component: CallsheetComponent },
    { 'path': '', redirectTo: 'CS', pathMatch: 'full' },
    { 'path': 'Login', component: LoginComponent },
    {
        'path': '', component: LoginComponent, children: [
            { 'path': 'Production', component: ProductionListComponent },
            { 'path': 'Crew', component: CrewListComponent },
            { 'path': 'Script', component: ScriptreaderComponent },
            { 'path': 'Planning', component: ProductionListComponent },
            { 'path': 'Calendar', component: CalendarComponent }
        ]
    },
    {
        'path': ':production', children: [
            { 'path': 'Crew', component: CrewListComponent },
            { 'path': 'Script', component: ScriptreaderComponent },
            { 'path': 'Productions', component: ProductionListComponent },
            { 'path': 'Calendar', component: CalendarComponent },
            { 'path': 'Hours', component: HoursComponent },
            { 'path': 'MyHours', component: AddHoursComponent },
            { 'path': 'Callsheet', component: CallsheetComponent },
            { 'path': 'Planning', component: PlanningComponent }
        ]
    },
    {
        'path': '**', pathMatch: 'full', component: PagenotfoundComponent
    }
];
