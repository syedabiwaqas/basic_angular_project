import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthorComponent } from './author/author.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { CreateAuthorComponent } from './create-author/create-author.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth_guard/auth.guard.service';

const appRoutes: Routes = [
    { path: '', canActivate: [AuthGuard], redirectTo: '/books', pathMatch: 'full' },
    { path: 'books', canActivate: [AuthGuard], component: HomeComponent},
    { path: 'create-books', canActivate: [AuthGuard], component: CreateBookComponent},
    { path: 'author', canActivate: [AuthGuard], component: AuthorComponent},
    { path: 'create-author', canActivate: [AuthGuard], component: CreateAuthorComponent},
    { path: 'login', component: LoginComponent},

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  }
