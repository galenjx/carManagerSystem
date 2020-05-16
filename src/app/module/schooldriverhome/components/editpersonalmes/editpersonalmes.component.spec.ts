import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpersonalmesComponent } from './editpersonalmes.component';

describe('EditpersonalmesComponent', () => {
  let component: EditpersonalmesComponent;
  let fixture: ComponentFixture<EditpersonalmesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpersonalmesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpersonalmesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
