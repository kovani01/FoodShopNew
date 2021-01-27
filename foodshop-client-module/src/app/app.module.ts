import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './auth/register/register.component';
import {Router, RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ContentComponent } from './layout/content/content.component';
import { CartComponent } from './cart/cart.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ItemComponent } from './cart/item/item.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './interceptors/auth-interceptor';

// import { HttpClientModule } from '@angular/common/http';
import { ProdComponent } from './prod/prod.component';
import { ContactsComponent } from './layout/contacts/contacts.component';
import {ProductService} from './services/product.service';
import { ProductComponent } from './layout/product/product.component';
import { OrderComponent } from './order/order.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cart', component: CartComponent},
  { path: 'order', component: OrderComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'auth', component: AuthComponent},
  { path: 'auth/register', component: RegisterComponent},
  { path: 'admin-panel', component: AdminPanelComponent},
  { path: 'about/#contacts', component: AboutComponent},
  { path: 'prod', component: ProdComponent},
  { path: 'prod#pizza', component: ProdComponent},
  { path: 'prod#sushi', component: ProdComponent},
  { path: 'prod#burgers', component: ProdComponent},
  { path: 'prod#drink', component: ProdComponent},
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent }
];

// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AuthComponent,
    RegisterComponent,
    PageNotFoundComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    ContentComponent,
    CartComponent,
    AdminPanelComponent,
    ItemComponent,
    ProdComponent,
    ContactsComponent,
    ProductComponent,
    OrderComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    NgbModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
