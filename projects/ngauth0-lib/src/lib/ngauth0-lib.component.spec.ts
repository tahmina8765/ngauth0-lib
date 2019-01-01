import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ngauth0LibComponent } from './ngauth0-lib.component';

describe('Ngauth0LibComponent', () => {
  let component: Ngauth0LibComponent;
  let fixture: ComponentFixture<Ngauth0LibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ngauth0LibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ngauth0LibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
