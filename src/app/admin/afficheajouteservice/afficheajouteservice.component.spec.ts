import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheajouteserviceComponent } from './afficheajouteservice.component';

describe('AfficheajouteserviceComponent', () => {
  let component: AfficheajouteserviceComponent;
  let fixture: ComponentFixture<AfficheajouteserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheajouteserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheajouteserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
