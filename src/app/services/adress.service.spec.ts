import { TestBed } from '@angular/core/testing';

import { Adress } from './adress.service';

describe('AdressService', () => {
  let service: Adress;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Adress);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
