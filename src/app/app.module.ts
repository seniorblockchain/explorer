import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { blockcoreModule } from '@blockcore';
import { blockcoreConfigModule } from '@blockcore/services/config';
import { blockcoreMockApiModule } from '@blockcore/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockApiServices } from 'app/mock-api';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppUpdateService } from './services/AppUpdateService';
import { MatSnackBarModule } from '@angular/material/snack-bar';
const routerConfig: ExtraOptions = {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        MatSnackBarModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),
        RouterModule.forRoot(appRoutes, { useHash: true }),
        RouterModule.forRoot(appRoutes, { onSameUrlNavigation: 'reload' }),
        // blockcore, blockcoreConfig & blockcoreMockAPI
        blockcoreModule,
        blockcoreConfigModule.forRoot(appConfig),
        blockcoreMockApiModule.forRoot(mockApiServices),

        // Core module of your application
        CoreModule,

        // Layout module of your application
        LayoutModule,
        BrowserModule,
        HttpClientModule,
        NgHttpLoaderModule.forRoot(),

        // 3rd party modules that require global configuration via forRoot
        MarkdownModule.forRoot({}),
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: environment.production,
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        }),


    ],
    // eslint-disable-next-line @typescript-eslint/naming-convention
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, AppUpdateService],
    exports: [RouterModule],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
