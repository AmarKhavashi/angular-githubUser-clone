import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RoutingModule} from './routing/routing.module';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';

import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpModule } from '@ngx-progressbar/http';

import { GithubService } from './github-services/github.service';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { GithubComponent } from './github/github.component';
import { DateCountPipe } from './date-count.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NotFoundComponent,
    ContactComponent,
    GithubComponent,
    DateCountPipe
    
    
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpModule,
    NgProgressModule.forRoot(),
    NgProgressHttpModule,
    FormsModule
    
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
