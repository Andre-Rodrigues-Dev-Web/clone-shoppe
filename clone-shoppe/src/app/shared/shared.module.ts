import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonAuthComponent } from './components/button-auth/button-auth.component';
import { CarouselStoriesComponent } from './components/carousel-stories/carousel-stories.component';
import { ButtonMenuComponent } from './components/button-menu/button-menu.component';

const components = [ButtonAuthComponent, ButtonMenuComponent, CarouselStoriesComponent];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components]
})
export class SharedModule {}
