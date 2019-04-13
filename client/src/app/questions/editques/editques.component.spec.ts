import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditquesComponent } from './editques.component';

describe('EditquesComponent', () => {
  let component: EditquesComponent;
  let fixture: ComponentFixture<EditquesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditquesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditquesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
