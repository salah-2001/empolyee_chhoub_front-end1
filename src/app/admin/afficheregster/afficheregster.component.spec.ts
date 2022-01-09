import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfficheregsterComponent } from './afficheregster.component';

describe('AfficheregsterComponent', () => {
  let component: AfficheregsterComponent;
  let fixture: ComponentFixture<AfficheregsterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfficheregsterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfficheregsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
