import { ApplicationGatewayAvailableSslOptionsPropertiesFormat } from './ApplicationGatewayAvailableSslOptionsPropertiesFormat';
import { Resource } from './Resource';

/**
 * @description Response for ApplicationGatewayAvailableSslOptions API service call.
 * @since 2017-11-01
 */
export interface ApplicationGatewayAvailableSslOptions extends Resource {
    properties: ApplicationGatewayAvailableSslOptionsPropertiesFormat;
}
