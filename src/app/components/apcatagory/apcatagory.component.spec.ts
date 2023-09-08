import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApcatagoryComponent } from './apcatagory.component';

describe('ApcatagoryComponent', () => {
  let component: ApcatagoryComponent;
  let fixture: ComponentFixture<ApcatagoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApcatagoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApcatagoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
