// Modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactDeleteComponent } from './contacts/contact-delete/contact-delete.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, data: {title: 'Home'}
  },
  {
    path: 'contact/contact-list',
    component: ContactListComponent,
    data: { title: 'Contact List' },
    canActivate: [AuthGuard]
  },
  {
    path: 'contact/contact-list/add',
    component: ContactDetailsComponent,
    data: { title: 'Add Contact' },
    canActivate: [AuthGuard]
  },
  {
    path: 'contact/contact-list/edit/:id',
    component: ContactDetailsComponent,
    data: { title: 'Edit Contact' },
    canActivate: [AuthGuard]
  },
  {
    path: 'contact/contact-list/delete/:id',
    component: ContactDeleteComponent,
    data: { title: 'Add Contact' },
    canActivate: [AuthGuard]
  },

  {
    path: 'register',
    component: RegisterComponent,
    data: { title: 'Register' }
  },
  { path: 'login', component: LoginComponent, data: { title: 'Register' } },
  { path: 'logout', redirectTo: '/login', pathMatch: 'full' },

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}