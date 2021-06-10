import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './commons/components/home-page/home-page.component';
import { LogginPageComponent } from './features/auth/pages/loggin-page/loggin-page.component';
import { ResumePageComponent } from './features/utilisateurs/pages/resume-page/resume-page.component';
import { NouvelUtilisateurComponent } from './features/utilisateurs/pages/nouvel-utilisateur/nouvel-utilisateur.component';
import { UtilisateurProfilePageComponent } from './features/utilisateurs/pages/utilisateur-profile-page/utilisateur-profile-page.component';
import { UtilisateurListPageComponent } from './features/utilisateurs/pages/utilisateur-list-page/utilisateur-list-page.component';

const routes: Routes = [
  {path:"home", component:HomePageComponent},
  {path:"loggin", component:LogginPageComponent},
  {path:"utilisateurs", component:UtilisateurListPageComponent},
  {path:"utilisateur/resume", component:ResumePageComponent},
  {path:"utilisateur/:id", component:UtilisateurProfilePageComponent},
  {path:"utilisateurs/new", component:NouvelUtilisateurComponent},
  {path:"**", redirectTo:"home"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
