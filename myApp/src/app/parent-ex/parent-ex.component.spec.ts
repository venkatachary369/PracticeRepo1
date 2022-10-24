import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentExComponent } from './parent-ex.component';

describe('ParentExComponent', () => {
  let component: ParentExComponent;
  let fixture: ComponentFixture<ParentExComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentExComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
