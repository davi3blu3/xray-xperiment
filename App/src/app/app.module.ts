import { environment } from './../environments/environment';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';

import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { RegistrationDetailComponent } from './xray/employee/registration-detail/registration-detail.component';
import { TdecHeaderComponent } from './shared/tdec-components/tdec-header/tdec-header.component';
import { PossessorDataComponent } from './xray/data/possessor-data/possessor-data.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationDetailComponent,
    TdecHeaderComponent,
    PossessorDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    environment.production
      ? []
      : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
          dataEncapsulation: false
        })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
