import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChallengeComponent } from './challenge/challenge.component';
import { HomeComponent } from './home/home.component';
import { IdeaComponent } from './idea/idea.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { MyChallengesComponent } from './my-challenges/my-challenges.component';
import { PageProfilComponent } from '../app/page-profil/page-profil.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'challenge', component: ChallengeComponent },
  { path: 'myChallenges', component: MyChallengesComponent },
  { path: 'idea', component: IdeaComponent },
  { path: 'profil', component: PageProfilComponent },
  // Sinon rediriger vers la page principale
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
