import { Resource } from './Resource';
import { VpnGatewayProperties } from './VpnGatewayProperties';
/**
 * @description VpnGateway Resource.
 */
export interface VpnGateway extends Resource {
    /**
     * @description Properties of the VPN gateway.
     */
    properties: VpnGatewayProperties;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
