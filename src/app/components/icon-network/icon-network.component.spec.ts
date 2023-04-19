import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconNetworkComponent } from './icon-network.component';

describe('IconNetworkComponent', () => {
  let component: IconNetworkComponent;
  let fixture: ComponentFixture<IconNetworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconNetworkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconNetworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
