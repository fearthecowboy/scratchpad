import { Resource } from './Resource';
import { ExpressRouteServiceProviderPropertiesFormat } from './ExpressRouteServiceProviderPropertiesFormat';
/**
 * @description A ExpressRouteResourceProvider object.
 */
export interface ExpressRouteServiceProvider extends Resource {
    /**
     * @description Properties of the express route service provider.
     */
    properties: ExpressRouteServiceProviderPropertiesFormat;
}
