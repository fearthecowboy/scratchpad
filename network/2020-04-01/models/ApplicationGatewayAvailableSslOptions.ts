import { Resource } from './Resource';
import { ApplicationGatewayAvailableSslOptionsPropertiesFormat } from './ApplicationGatewayAvailableSslOptionsPropertiesFormat';
/**
 * @description Response for ApplicationGatewayAvailableSslOptions API service call.
 */
export interface ApplicationGatewayAvailableSslOptions extends Resource {
    /**
     * @description Properties of the application gateway available SSL options.
     */
    properties: ApplicationGatewayAvailableSslOptionsPropertiesFormat;
}
