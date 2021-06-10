import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogginPageComponent } from './features/auth/pages/loggin-page/loggin-page.component';
import { LogginFormComponent } from './features/auth/components/loggin-form/loggin-form.component';
import { HomePageComponent } from './commons/components/home-page/home-page.component';
import { ResumePageComponent } from './features/utilisateurs/pages/resume-page/resume-page.component';
import { UtilisateurListComponent } from './features/utilisateurs/components/utilisateur-list/utilisateur-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './commons/components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { NouvelUtilisateurComponent } from './features/utilisateurs/pages/nouvel-utilisateur/nouvel-utilisateur.component';
import { UtilisateurProfilePageComponent } from './features/utilisateurs/pages/utilisateur-profile-page/utilisateur-profile-page.component';
import { UtilisateurProfileComponent } from './features/utilisateurs/components/utilisateur-profile/utilisateur-profile.component';
import { UtilisateurListPageComponent } from './features/utilisateurs/pages/utilisateur-list-page/utilisateur-list-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LogginPageComponent,
    LogginFormComponent,
    HomePageComponent,
    ResumePageComponent,
    UtilisateurListComponent,
    HeaderComponent,
    NouvelUtilisateurComponent,
    UtilisateurProfilePageComponent,
    UtilisateurProfileComponent,
    UtilisateurListPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
