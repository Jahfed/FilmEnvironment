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
import { authorizedGuard } from './login/authorized.guard';
import { Role } from './login/role';
import { UnauthorizedComponent } from './login/unauthorized/unauthorized.component';

export const routes: Routes = [
    { 'path': '', title: "Login", redirectTo: 'Login', pathMatch: 'full' },
    { 'path': 'Login', component: LoginComponent },
    {
        'path': 'Dashboard', title: "Dashboard", component: DashboardComponent, children: [
            { 'path': 'Production', component: ProductionListComponent },
            { 'path': 'Crew', component: CrewListComponent },
            { 'path': 'Script', component: ScriptreaderComponent },
            { 'path': 'Planning', component: ProductionListComponent },
            { 'path': 'Calendar', component: CalendarComponent },
            { 'path': 'Hours', component: HoursComponent },
            { 'path': 'MyHours', component: AddHoursComponent },
            { 'path': 'Callsheet', component: CallsheetComponent }
        ],
        canActivate: [authorizedGuard],
        data: {
            roles: [Role.LINEPRODUCER]
        }
    },
    {
        'path': '', children: [
            { 'path': 'Production', component: ProductionListComponent },
            { 'path': 'Calendar', component: CalendarComponent },
            { 'path': 'Planning', component: PlanningComponent }],
        canActivate: [authorizedGuard],
        data: {
            roles: [Role.LINEPRODUCER]
        }

    },
    {
        'path': 'unauthorized', component: UnauthorizedComponent
    },
    {
        'path': '**', pathMatch: 'full', component: PagenotfoundComponent
    }
];
