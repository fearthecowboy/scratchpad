import { VirtualNetworkGatewayIPConfiguration } from './VirtualNetworkGatewayIPConfiguration';
import { VirtualNetworkGatewayType } from '../enums/VirtualNetworkGatewayType';
import { VpnType } from '../enums/VpnType';
import { VpnGatewayGeneration } from '../enums/VpnGatewayGeneration';
import { SubResource } from './SubResource';
import { VirtualNetworkGatewaySku } from './VirtualNetworkGatewaySku';
import { VpnClientConfiguration } from './VpnClientConfiguration';
import { BgpSettings } from './BgpSettings';
import { AddressSpace } from './AddressSpace';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description VirtualNetworkGateway properties.
 */
export interface VirtualNetworkGatewayPropertiesFormat {
    /**
     * @description IP configurations for virtual network gateway.
     */
    ipConfigurations: Array<VirtualNetworkGatewayIPConfiguration>;
    /**
     * @description The type of this virtual network gateway.
     */
    gatewayType: VirtualNetworkGatewayType | string;
    /**
     * @description The type of this virtual network gateway.
     */
    vpnType: VpnType | string;
    /**
     * @description The generation for this VirtualNetworkGateway. Must be None if gatewayType is not VPN.
     */
    vpnGatewayGeneration: VpnGatewayGeneration | string;
    /**
     * @description Whether BGP is enabled for this virtual network gateway or not.
     */
    enableBgp: boolean;
    /**
     * @description Whether private IP needs to be enabled on this gateway for connections or not.
     */
    enablePrivateIpAddress: boolean;
    /**
     * @description ActiveActive flag.
     */
    activeActive: boolean;
    /**
     * @description The reference to the LocalNetworkGateway resource which represents local network site having default routes. Assign Null value in case of removing existing default site setting.
     */
    gatewayDefaultSite: SubResource;
    /**
     * @description The reference to the VirtualNetworkGatewaySku resource which represents the SKU selected for Virtual network gateway.
     */
    sku: VirtualNetworkGatewaySku;
    /**
     * @description The reference to the VpnClientConfiguration resource which represents the P2S VpnClient configurations.
     */
    vpnClientConfiguration: VpnClientConfiguration;
    /**
     * @description Virtual network gateway's BGP speaker settings.
     */
    bgpSettings: BgpSettings;
    /**
     * @description The reference to the address space resource which represents the custom routes address space specified by the customer for virtual network gateway and VpnClient.
     */
    customRoutes: AddressSpace;
    /**
     * @description The resource GUID property of the virtual network gateway resource.
     */
    readonly resourceGuid: string ;
    /**
     * @description The provisioning state of the virtual network gateway resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description Whether dns forwarding is enabled or not.
     */
    enableDnsForwarding: boolean;
    /**
     * @description The IP address allocated by the gateway to which dns requests can be sent.
     */
    readonly inboundDnsForwardingEndpoint: string ;
}
