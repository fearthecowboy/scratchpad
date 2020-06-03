import { P2SVpnGatewayProperties } from './P2SVpnGatewayProperties';
import { Resource } from './Resource';

/**
 * @description P2SVpnGateway Resource.
 * @since 2019-07-01
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
