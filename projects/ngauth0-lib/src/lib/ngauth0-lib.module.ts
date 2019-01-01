import { NgModule } from '@angular/core';
import { Ngauth0LibComponent } from './ngauth0-lib.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [Ngauth0LibComponent, AuthComponent],
  imports: [
  ],
  exports: [Ngauth0LibComponent, AuthComponent]
})
export class Ngauth0LibModule { }
