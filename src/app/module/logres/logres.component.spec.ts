import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogresComponent } from './logres.component';

describe('LogresComponent', () => {
  let component: LogresComponent;
  let fixture: ComponentFixture<LogresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
