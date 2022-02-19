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
const routerConfig: ExtraOptions = {
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'enabled',
};

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
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


    ],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
    exports: [RouterModule],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
