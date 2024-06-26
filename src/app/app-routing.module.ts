import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./public/pages/not-found/not-found.component";
import {HomeComponent} from "./public/pages/home/home.component";
import {BookingViewComponent} from "./booking/pages/booking-view/booking-view.component";
import {LoginViewComponent} from "./public/components/login-view/login-view.component";
import {RegisterViewComponent} from "./public/components/register-view/register-view.component";
import {ServicesContentViewComponent} from "./services-content/pages/services-content-view/services-content-view.component";
import {VeterinaryListComponent} from "./veterinary/components/veterinary-list/veterinary-list.component";
import {ProductsViewComponent} from "./shop/pages/products-view/products-view.component";
import {BillingViewComponent} from "./billing/pages/billing-view/billing-view.component";
import {PaymentConfirmationComponent} from "./public/pages/payment-confirmation/payment-confirmation.component";
import {RequestViewComponent} from "./support/pages/request-view/request-view.component";
import {AppointmentViewComponent} from "./vet-appoinment/components/appointment-view/appointment-view.component";
import {ForgotPasswordViewComponent} from "./public/components/forgot-password-view/forgot-password-view.component";
import {AppointmentListComponent} from "./appointment/components/appointment-list/appointment-list.component";
import {ProfileViewAndEditComponent} from "./profile/components/profile-view-and-edit/profile-view-and-edit.component";
import {NewProductPublishViewComponent} from "./shop/pages/new-product-publish-view/new-product-publish-view.component";
import {VeterinaryViewComponent} from "./veterinary/components/veterinary-view/veterinary-view.component";
import {HomeVetComponent} from "./public/pages/home-vet/home-vet.component";
import {
  VetProfileViewAndEditComponent
} from "./profile/components/vet-profile-view-and-edit/vet-profile-view-and-edit.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'booking', component: BookingViewComponent },
  { path: 'appointment', component: AppointmentListComponent },
  { path: 'login', component: LoginViewComponent },
  { path: 'signup', component: RegisterViewComponent },
  { path: 'services', component: ServicesContentViewComponent },
  { path: 'veterinary', component: VeterinaryListComponent },
  { path: 'veterinaries/:nameVet', component: VeterinaryViewComponent },
  { path: 'products', component: ProductsViewComponent },
  { path: 'billing', component: BillingViewComponent },
  { path: 'veterinary-publish-product', component: NewProductPublishViewComponent},
  { path: 'profile', component: ProfileViewAndEditComponent },
  { path: 'payment-confirmation', component: PaymentConfirmationComponent},
  { path: 'contact-us', component: RequestViewComponent },
  { path: 'veterinary-appointment', component: AppointmentViewComponent },
  { path: 'forgotpassword', component: ForgotPasswordViewComponent},
  { path: 'veterinary-home', component: HomeVetComponent},
  { path: 'veterinary-profile', component: VetProfileViewAndEditComponent},
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
