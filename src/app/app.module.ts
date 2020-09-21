import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ManagerCategoryComponent } from './manager-category/manager-category.component';
import { ManagerPostComponent } from './manager-post/manager-post.component';
import { ManagerUserComponent } from './manager-user/manager-user.component';
import { LoginComponent } from './login/login.component';
import { MenuBarComponent } from './main-layout/menu-bar/menu-bar.component';
import { HeaderComponent } from './main-layout/header/header.component';
import { FooterComponent } from './main-layout/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ManagerCategoryComponent,
    ManagerPostComponent,
    ManagerUserComponent,
    LoginComponent,
    MenuBarComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path: 'dang-nhap', component: LoginComponent},
        {path: '', component: ManagerCategoryComponent},
        {path: 'quan-ly-danh-muc', component: ManagerCategoryComponent},
        {path: 'quan-ly-bai-viet', component: ManagerPostComponent},
        {path: 'quan-ly-tai-khoan', component: ManagerUserComponent},
        {path: 'dang-xuat', component: LoginComponent}
      ]
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
