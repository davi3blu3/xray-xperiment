/*
 *  Module Imports
 */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { environment } from './../environments/environment';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';

/*
 *  Component Imports
 */

// TDEC Components
import { TdecHeaderComponent } from './shared/tdec-components/tdec-header/tdec-header.component';
import { TdecLoadingComponent } from './shared/tdec-components/tdec-overlay/tdec-loading/tdec-loading.component';
import { TdecFooterComponent } from './shared/tdec-components/tdec-footer/tdec-footer.component';
import { TdecModalComponent } from './shared/tdec-components/tdec-overlay/tdec-modal/tdec-modal.component';

// Shared Components
import { AppComponent } from './app.component';
import { PageHeaderComponent } from './shared/tdec-components/tdec-page-header/tdec-page-header.component';
import { PagerControlsComponent } from './shared/tdec-components/tdec-pager-controls/tdec-pager-controls.component';
import { MachineDetailComponent } from './xray/views/employee/registration-detail/machine-detail/machine-detail.component';
import { TubeDetailComponent } from './xray/views/employee/registration-detail/machine-detail/tube-detail/tube-detail.component';

import { PossessorDataComponent } from './xray/data/possessor-data/possessor-data.component';
import { OwnerDataComponent } from './xray/data/owner-data/owner-data.component';
import { RadSafetyDataComponent } from './xray/data/rad-safety-data/rad-safety-data.component';
import { CPanelDataComponent } from './xray/data/c-panel-data/c-panel-data.component';
import { TubeDataComponent } from './xray/data/tube-data/tube-data.component';

import { PossessorFormComponent } from './xray/forms/possessor-form/possessor-form.component';
import { OwnerFormComponent } from './xray/forms/owner-form/owner-form.component';
import { RadSafetyFormComponent } from './xray/forms/rad-safety-form/rad-safety-form.component';
import { CPanelFormComponent } from './xray/forms/c-panel-form/c-panel-form.component';
import { TubeFormComponent } from './xray/forms/tube-form/tube-form.component';

// XRay View Components
import { RegistrationDetailComponent } from './xray/views/employee/registration-detail/registration-detail.component';
import { TdecOverlayComponent } from './shared/tdec-components/tdec-overlay/tdec-overlay.component';
import { TypographyComponent } from './xray/views/typography/typography.component';

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
    RadSafetyFormComponent,
    CPanelDataComponent,
    CPanelFormComponent,
    TubeFormComponent,
    TubeDataComponent,
    MachineDetailComponent,
    TubeDetailComponent,
    PagerControlsComponent,
    TdecLoadingComponent,
    TdecFooterComponent,
    TdecModalComponent,
    TdecOverlayComponent,
    TypographyComponent
  ],
  entryComponents: [TdecModalComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AngularFontAwesomeModule,
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
