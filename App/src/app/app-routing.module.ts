import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationDetailComponent } from './xray/employee/registration-detail/registration-detail.component';

const routes: Routes = [{ path: '', component: RegistrationDetailComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
