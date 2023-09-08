import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesumComponent } from './invoicesum.component';

describe('InvoicesumComponent', () => {
  let component: InvoicesumComponent;
  let fixture: ComponentFixture<InvoicesumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicesumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicesumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
