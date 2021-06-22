import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Partials
import { HeaderComponent } from './partials/header/header.component';
import { SidebarComponent } from './partials/sidebar/sidebar.component';
import { BreadcrumbComponent } from './partials/breadcrumb/breadcrumb.component';
import { FooterComponent } from './partials/footer/footer.component';

// Layouts
import { HomeComponent } from './layouts/home/home.component';
import { SignInComponent } from './layouts/sign-in/sign-in.component';
import { SignUpComponent } from './layouts/sign-up/sign-up.component';

// Specific
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductItemComponent } from './products/product-list/product-item/product-item.component';
import { BrandListComponent } from './brands/brand-list/brand-list.component';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full',
  },
  {
    path: 'signin',
    component: SignInComponent,
  },
  {
    path: 'signup',
    component: SignUpComponent,
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'products',
        component: ProductListComponent,
      },
      {
        path: 'brands',
        component: BrandListComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    BreadcrumbComponent,
    FooterComponent,

    //
    HomeComponent,
    SignInComponent,
    SignUpComponent,

    //
    ProductListComponent,
    ProductItemComponent,
    BrandListComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes), NgxPaginationModule],
  exports: [RouterModule],
})
export class BackendModule {}
