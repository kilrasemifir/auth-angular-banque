import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogginPageComponent } from './loggin-page.component';

describe('LogginPageComponent', () => {
  let component: LogginPageComponent;
  let fixture: ComponentFixture<LogginPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogginPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
