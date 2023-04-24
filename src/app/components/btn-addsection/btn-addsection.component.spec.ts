import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnAddsectionComponent } from './btn-addsection.component';

describe('BtnAddsectionComponent', () => {
  let component: BtnAddsectionComponent;
  let fixture: ComponentFixture<BtnAddsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnAddsectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnAddsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
