import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UncarComponent } from './uncar.component';

describe('UncarComponent', () => {
  let component: UncarComponent;
  let fixture: ComponentFixture<UncarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UncarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UncarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
