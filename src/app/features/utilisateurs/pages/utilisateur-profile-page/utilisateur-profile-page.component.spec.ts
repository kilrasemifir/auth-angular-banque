import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurProfilePageComponent } from './utilisateur-profile-page.component';

describe('UtilisateurProfilePageComponent', () => {
  let component: UtilisateurProfilePageComponent;
  let fixture: ComponentFixture<UtilisateurProfilePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurProfilePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
