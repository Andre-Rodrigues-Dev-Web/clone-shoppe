import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselStoriesComponent } from './carousel-stories.component';

describe('CarouselStoriesComponent', () => {
  let component: CarouselStoriesComponent;
  let fixture: ComponentFixture<CarouselStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselStoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
