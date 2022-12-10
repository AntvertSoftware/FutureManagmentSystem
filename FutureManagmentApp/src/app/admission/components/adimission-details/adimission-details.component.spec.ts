import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdimissionDetailsComponent } from './adimission-details.component';

describe('AdimissionDetailsComponent', () => {
  let component: AdimissionDetailsComponent;
  let fixture: ComponentFixture<AdimissionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdimissionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdimissionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
