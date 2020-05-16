import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchooldriverhomeComponent } from './schooldriverhome.component';

describe('SchooldriverhomeComponent', () => {
  let component: SchooldriverhomeComponent;
  let fixture: ComponentFixture<SchooldriverhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchooldriverhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchooldriverhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
