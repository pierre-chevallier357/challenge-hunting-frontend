import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { YagaModule } from '@yaga/leaflet-ng2';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChallengeComponent } from './challenge/challenge.component';
import { ChamiService } from './chami.service';
import { DefiService } from './defi.service';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { IdeaComponent } from './idea/idea.component';
import { LeaderboardComponent } from './leaderboard/leaderboard.component';
import { MyChallengesComponent } from './my-challenges/my-challenges.component';
import { PageProfilComponent } from './page-profil/page-profil.component';
import { TableChallengeComponent } from './challenge/tableChallenge/tableChallenge.component';

import 'leaflet/dist/images/marker-shadow.png';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeaderboardComponent,
    MyChallengesComponent,
    ChallengeComponent,
    IdeaComponent,
    PageProfilComponent,
    TableChallengeComponent
  ],
  imports: [
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    YagaModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [ChamiService, DefiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
