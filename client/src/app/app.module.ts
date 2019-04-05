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

// Services
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from './services/auth.service';
import { JwtModule, JwtHelperService, JwtInterceptor } from '@auth0/angular-jwt';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MzButtonModule, MzInputModule } from 'ngx-materialize';
import { MzValidationModule } from 'ngx-materialize';
import { MzNavbarModule } from 'ngx-materialize';
import { MzParallaxModule } from 'ngx-materialize';
import { ParallaxModule, ParallaxConfig } from 'ngx-parallax';

// Route Guards
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './pages/home/home.component';


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
    ContactDetailsComponent,
    ContactDeleteComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MzButtonModule,
    MzInputModule,
    ParallaxModule,
    MzValidationModule,
    MzParallaxModule,
    MzNavbarModule,
    FlashMessagesModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter
      }
    })
  ],
  exports: [
    MzInputModule,
    MzValidationModule,
  ],
  providers: [FlashMessagesService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
