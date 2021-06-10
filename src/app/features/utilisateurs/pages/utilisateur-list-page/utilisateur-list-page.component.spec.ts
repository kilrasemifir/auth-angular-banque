import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurListPageComponent } from './utilisateur-list-page.component';

describe('UtilisateurListPageComponent', () => {
  let component: UtilisateurListPageComponent;
  let fixture: ComponentFixture<UtilisateurListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
