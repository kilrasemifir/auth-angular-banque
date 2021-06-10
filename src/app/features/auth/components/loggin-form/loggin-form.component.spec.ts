import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogginFormComponent } from './loggin-form.component';

describe('LogginFormComponent', () => {
  let component: LogginFormComponent;
  let fixture: ComponentFixture<LogginFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogginFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
