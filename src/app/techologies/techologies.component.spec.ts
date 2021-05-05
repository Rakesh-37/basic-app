import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechologiesComponent } from './techologies.component';

describe('TechologiesComponent', () => {
  let component: TechologiesComponent;
  let fixture: ComponentFixture<TechologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechologiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
