import { APP_INITIALIZER, ModuleWithProviders, NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { blockcore_MOCK_API_DEFAULT_DELAY } from '@blockcore/lib/mock-api/mock-api.constants';
import { blockcoreMockApiInterceptor } from '@blockcore/lib/mock-api/mock-api.interceptor';

@NgModule({
    providers: [
        {
            provide : HTTP_INTERCEPTORS,
            useClass: blockcoreMockApiInterceptor,
            multi   : true
        }
    ]
})
export class blockcoreMockApiModule
{
    /**
     * blockcoreMockApi module default configuration.
     *
     * @param mockApiServices - Array of services that register mock API handlers
     * @param config - Configuration options
     * @param config.delay - Default delay value in milliseconds to apply all responses
     */
    static forRoot(mockApiServices: any[], config?: { delay?: number }): ModuleWithProviders<blockcoreMockApiModule>
    {
        return {
            ngModule : blockcoreMockApiModule,
            providers: [
                {
                    provide   : APP_INITIALIZER,
                    deps      : [...mockApiServices],
                    useFactory: () => (): any => null,
                    multi     : true
                },
                {
                    provide : blockcore_MOCK_API_DEFAULT_DELAY,
                    useValue: config?.delay ?? 0
                }
            ]
        };
    }
}
