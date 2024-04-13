/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SweetToastService } from './sweetToast.service';

describe('Service: SweetToast', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SweetToastService]
    });
  });

  it('should ...', inject([SweetToastService], (service: SweetToastService) => {
    expect(service).toBeTruthy();
  }));
});
