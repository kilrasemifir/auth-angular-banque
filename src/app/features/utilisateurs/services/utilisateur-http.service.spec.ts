import { TestBed } from '@angular/core/testing';

import { UtilisateurHttpService } from './utilisateur-http.service';

describe('UtilisateurHttpService', () => {
  let service: UtilisateurHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtilisateurHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
