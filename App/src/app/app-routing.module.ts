import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationDetailComponent } from './xray/views/employee/registration-detail/registration-detail.component';
import { TypographyComponent } from './xray/views/typography/typography.component';

const routes: Routes = [
  { path: '', component: RegistrationDetailComponent },
  { path: 'typography', component: TypographyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
