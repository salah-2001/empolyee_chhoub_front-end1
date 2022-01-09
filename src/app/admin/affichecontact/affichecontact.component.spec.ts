import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichecontactComponent } from './affichecontact.component';

describe('AffichecontactComponent', () => {
  let component: AffichecontactComponent;
  let fixture: ComponentFixture<AffichecontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichecontactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
