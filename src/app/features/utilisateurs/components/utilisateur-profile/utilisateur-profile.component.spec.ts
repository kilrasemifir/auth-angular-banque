import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurProfileComponent } from './utilisateur-profile.component';

describe('UtilisateurProfileComponent', () => {
  let component: UtilisateurProfileComponent;
  let fixture: ComponentFixture<UtilisateurProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
