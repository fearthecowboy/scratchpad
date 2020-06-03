import { SubResource } from './SubResource';
import { VirtualNetworkGatewayIPConfigurationPropertiesFormat } from './VirtualNetworkGatewayIPConfigurationPropertiesFormat';
/**
 * @description IP configuration for virtual network gateway.
 */
export interface VirtualNetworkGatewayIPConfiguration extends SubResource {
    /**
     * @description Properties of the virtual network gateway ip configuration.
     */
    properties: VirtualNetworkGatewayIPConfigurationPropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
