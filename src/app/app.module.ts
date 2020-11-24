import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConfigService } from './config/config.service';
import { HeaderComponent } from './header/header.component';
import { AuthorComponent } from './author/author.component';
import { AppRoutingModule } from './app.routing.module';
import { CreateBookComponent } from './create-book/create-book.component';
import {  ReactiveFormsModule } from '@angular/forms';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { LoginComponent } from './login/login.component';
import { AuthServcie } from './auth_guard/auth.service';
import { AuthGuard } from './auth_guard/auth.guard.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AuthorComponent,
    CreateBookComponent,
    CreateAuthorComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ConfigService, AuthServcie, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
