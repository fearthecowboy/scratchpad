import { Resource } from './Resource';
import { ExpressRouteServiceProviderPropertiesFormat } from './ExpressRouteServiceProviderPropertiesFormat';
/**
 * @description A ExpressRouteResourceProvider object.
 */
export interface ExpressRouteServiceProvider extends Resource {
    properties: ExpressRouteServiceProviderPropertiesFormat;
}
