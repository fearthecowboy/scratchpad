import { Resource } from './Resource';
import { P2SVpnGatewayProperties } from './P2SVpnGatewayProperties';
/**
 * @description P2SVpnGateway Resource.
 */
export interface P2SVpnGateway extends Resource {
    /**
     * @description Properties of the P2SVpnGateway.
     */
    properties: P2SVpnGatewayProperties;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
