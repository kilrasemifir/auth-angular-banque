import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilisateurListComponent } from './utilisateur-list.component';

describe('UtilisateurListComponent', () => {
  let component: UtilisateurListComponent;
  let fixture: ComponentFixture<UtilisateurListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilisateurListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilisateurListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
