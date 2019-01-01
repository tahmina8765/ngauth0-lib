import { TestBed } from '@angular/core/testing';

import { Ngauth0LibService } from './ngauth0-lib.service';

describe('Ngauth0LibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ngauth0LibService = TestBed.get(Ngauth0LibService);
    expect(service).toBeTruthy();
  });
});
