import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { LayoutComponent } from '../layout/layout.component';
import { NavBarComponent } from '../layout/Components/nav-bar/nav-bar.component';
import { SideBarComponent } from '../layout/Components/side-bar/side-bar.component';
import { ParallaxDirective } from './Directives/parallax.directive';
import { ContentComponent } from './Components/content/content.component';
import { FooterComponent } from './Components/footer/footer.component';
import { DownSectionComponent } from './Components/down-section/down-section.component';


@NgModule({
  declarations: [
    LayoutComponent,
    NavBarComponent,
    SideBarComponent,
    ParallaxDirective,
    ContentComponent,
    FooterComponent,
    DownSectionComponent,
  ],

  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class LayoutModule { }
