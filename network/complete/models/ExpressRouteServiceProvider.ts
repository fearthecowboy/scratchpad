import { ExpressRouteServiceProviderPropertiesFormat } from './ExpressRouteServiceProviderPropertiesFormat';
import { Resource } from './Resource';

/**
 * @description A ExpressRouteResourceProvider object.
 */
export interface ExpressRouteServiceProvider extends Resource {
    properties: ExpressRouteServiceProviderPropertiesFormat;
}
