import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletequesComponent } from './deleteques.component';

describe('DeletequesComponent', () => {
  let component: DeletequesComponent;
  let fixture: ComponentFixture<DeletequesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletequesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletequesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
