import { platformBrowser }    from '@angular/platform-browser';
import { AppModuleNgFactory } from '../aot/src/app/app.module.ngfactory';

// import { environment } from './environments/environment';
// if (environment.production) {
//   enableProdMode();
// }
// import { enableProdMode } from '@angular/core';
 
console.log('Running AOT compiled');
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);


// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//
// import { AppModule } from './app/app.module';
//
//
// platformBrowserDynamic().bootstrapModule(AppModule);
