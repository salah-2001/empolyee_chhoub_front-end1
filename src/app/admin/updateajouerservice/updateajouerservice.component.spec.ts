import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateajouerserviceComponent } from './updateajouerservice.component';

describe('UpdateajouerserviceComponent', () => {
  let component: UpdateajouerserviceComponent;
  let fixture: ComponentFixture<UpdateajouerserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateajouerserviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateajouerserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
