/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { blockcoreDrawerComponent } from '@blockcore/components/drawer/drawer.component';

@Injectable({
    providedIn: 'root'
})
export class blockcoreDrawerService
{
    private _componentRegistry: Map<string, blockcoreDrawerComponent> = new Map<string, blockcoreDrawerComponent>();

    /**
     * Constructor
     */
    constructor()
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register drawer component
     *
     * @param name
     * @param component
     */
    registerComponent(name: string, component: blockcoreDrawerComponent): void
    {
        this._componentRegistry.set(name, component);
    }

    /**
     * Deregister drawer component
     *
     * @param name
     */
    deregisterComponent(name: string): void
    {
        this._componentRegistry.delete(name);
    }

    /**
     * Get drawer component from the registry
     *
     * @param name
     */
    getComponent(name: string): blockcoreDrawerComponent | undefined
    {
        return this._componentRegistry.get(name);
    }
}
