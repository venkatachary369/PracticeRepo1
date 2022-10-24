import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YoutubeCompComponent } from './youtube-comp.component';

describe('YoutubeCompComponent', () => {
  let component: YoutubeCompComponent;
  let fixture: ComponentFixture<YoutubeCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YoutubeCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YoutubeCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
