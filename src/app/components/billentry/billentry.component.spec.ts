import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillentryComponent } from './billentry.component';

describe('BillentryComponent', () => {
  let component: BillentryComponent;
  let fixture: ComponentFixture<BillentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillentryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
