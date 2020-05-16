import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MancarComponent } from './mancar.component';

describe('MancarComponent', () => {
  let component: MancarComponent;
  let fixture: ComponentFixture<MancarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MancarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MancarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
