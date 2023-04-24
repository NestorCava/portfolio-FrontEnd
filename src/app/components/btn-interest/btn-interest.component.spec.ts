import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnInterestComponent } from './btn-interest.component';

describe('BtnInterestComponent', () => {
  let component: BtnInterestComponent;
  let fixture: ComponentFixture<BtnInterestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnInterestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
