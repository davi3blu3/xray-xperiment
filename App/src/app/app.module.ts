import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ReactiveFormsModule } from '@angular/forms';

import { environment } from './../environments/environment';

import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { RegistrationDetailComponent } from './xray/employee/registration-detail/registration-detail.component';
import { TdecHeaderComponent } from './shared/tdec-components/tdec-header/tdec-header.component';
import { PossessorDataComponent } from './xray/data/possessor-data/possessor-data.component';
import { PageHeaderComponent } from './shared/tdec-components/page-header/page-header.component';
import { OwnerDataComponent } from './xray/data/owner-data/owner-data.component';
import { RadSafetyDataComponent } from './xray/data/rad-safety-data/rad-safety-data.component';
import { PossessorFormComponent } from './xray/forms/possessor-form/possessor-form.component';
import { OwnerFormComponent } from './xray/forms/owner-form/owner-form.component';
import { RadSafetyFormComponent } from './xray/forms/rad-safety-form/rad-safety-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationDetailComponent,
    TdecHeaderComponent,
    PossessorDataComponent,
    PageHeaderComponent,
    OwnerDataComponent,
    RadSafetyDataComponent,
    PossessorFormComponent,
    OwnerFormComponent,
    RadSafetyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
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
