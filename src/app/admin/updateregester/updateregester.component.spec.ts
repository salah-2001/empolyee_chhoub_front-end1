import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateregesterComponent } from './updateregester.component';

describe('UpdateregesterComponent', () => {
  let component: UpdateregesterComponent;
  let fixture: ComponentFixture<UpdateregesterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateregesterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateregesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
