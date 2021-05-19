import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  if (window['ngRef']){
    window['ngRef'].destroy();
  }
})

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
