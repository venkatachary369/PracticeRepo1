import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesExComponent } from './pipes-ex.component';

describe('PipesExComponent', () => {
  let component: PipesExComponent;
  let fixture: ComponentFixture<PipesExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipesExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
