// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { BasePageComponent } from './partials/base-page/base-page.component';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { ContactDetailsComponent } from './contacts/contact-details/contact-details.component';
import { ContactDeleteComponent } from './contacts/contact-delete/contact-delete.component';
import { CreateSurveyComponent } from './pages/create-survey/create-survey.component';

// Services
import {
  FlashMessagesModule,
  FlashMessagesService
} from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
import {
  JwtModule,
  JwtHelperService,
  JwtInterceptor
} from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MzButtonModule } from 'ngx-materialize';
import { MzValidationModule } from 'ngx-materialize';
import { MzNavbarModule } from 'ngx-materialize';
import { MzParallaxModule } from 'ngx-materialize';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';
import { MzInputModule } from 'ngx-materialize';
import { MzCardModule } from 'ngx-materialize';
import { MzCollapsibleModule } from 'ngx-materialize';
import { MzModalModule } from 'ngx-materialize';
import { MzSelectModule } from 'ngx-materialize';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

// Route Guards
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { AddquesComponent } from './questions/addques/addques.component';
import { EditquesComponent } from './questions/editques/editques.component';
import { DeletequesComponent } from './questions/deleteques/deleteques.component';
import { DetailsComponent } from './questions/details/details.component';

export function jwtTokenGetter() {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BasePageComponent,
    PageNotFoundComponent,
    ContactListComponent,
    RegisterComponent,
    LoginComponent,
    CreateSurveyComponent,
    ContactDetailsComponent,
    ContactDeleteComponent,
    HomeComponent,
    CreateSurveyComponent,
    AddquesComponent,
    EditquesComponent,
    DeletequesComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MzCardModule,
    MzCollapsibleModule,
    HttpClientModule,
    MzButtonModule,
    MzInputModule,
    ParallaxModule,
    MzValidationModule,
    MzParallaxModule,
    BrowserAnimationsModule,
    MzNavbarModule,
    MzModalModule,
    MzSelectModule,
    FlashMessagesModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  exports: [MzInputModule, MzValidationModule],
  providers: [FlashMessagesService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
