import { ProvisioningState } from "../enums/ProvisioningState";
import { VirtualNetworkGatewayType } from '../enums/VirtualNetworkGatewayType';
import { VpnGatewayGeneration } from "../enums/VpnGatewayGeneration";
import { VpnType } from '../enums/VpnType';
import { AddressSpace } from "./AddressSpace";
import { BgpSettings } from './BgpSettings';
import { SubResource } from './SubResource';
import { VirtualNetworkGatewayIPConfiguration } from './VirtualNetworkGatewayIPConfiguration';
import { VirtualNetworkGatewaySku } from './VirtualNetworkGatewaySku';
import { VpnClientConfiguration } from './VpnClientConfiguration';

/**
 * @description VirtualNetworkGateway properties
 */
export interface VirtualNetworkGatewayPropertiesFormat {
    /**
     * @description IP configurations for virtual network gateway.
     * @Optional  '2017-11-01' - made property required
     */
    ipConfigurations: Array<VirtualNetworkGatewayIPConfiguration>;
    /**
     * @description The type of this virtual network gateway. Possible values are: 'Vpn' and 'ExpressRoute'.
     * @Optional  '2017-11-01' - made property required
     */
    gatewayType: VirtualNetworkGatewayType | string;
    /**
     * @description The type of this virtual network gateway. Possible values are: 'PolicyBased' and 'RouteBased'.
     * @Optional  '2017-11-01' - made property required
     */
    vpnType: VpnType | string;
    /**
     * @description Whether BGP is enabled for this virtual network gateway or not.
     */
    enableBgp: boolean;
    /**
     * @description ActiveActive flag
     */
    activeActive: boolean;
    /**
     * @description The reference of the LocalNetworkGateway resource which represents local network site having default routes. Assign Null value in case of removing existing default site setting.
     */
    gatewayDefaultSite: SubResource;
    /**
     * @description The reference of the VirtualNetworkGatewaySku resource which represents the SKU selected for Virtual network gateway.
     */
    sku: VirtualNetworkGatewaySku;
    /**
     * @description The reference of the VpnClientConfiguration resource which represents the P2S VpnClient configurations.
     */
    vpnClientConfiguration: VpnClientConfiguration;
    /**
     * @description Virtual network gateway's BGP speaker settings.
     */
    bgpSettings: BgpSettings;
    /**
     * @description The resource GUID property of the VirtualNetworkGateway resource.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly resourceGuid: string;
    /**
     * @description The provisioning state of the VirtualNetworkGateway resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     */
    readonly provisioningState: ProvisioningState | string ;
    /** @description The generation for this VirtualNetworkGateway. Must be None if gatewayType is not VPN.
     * @since 2019-07-01
     */
    vpnGatewayGeneration: VpnGatewayGeneration | string;
    /** @description The reference of the address space resource which represents the custom routes address space specified by the customer for virtual network gateway and VpnClient.
     * @since 2019-07-01
     */
    customRoutes: AddressSpace;
    /** @description Whether private IP needs to be enabled on this gateway for connections or not.
     * @since 2019-12-01
     */
    enablePrivateIpAddress: boolean;
    /** @description Whether dns forwarding is enabled or not.
     * @since 2019-12-01
     */
    enableDnsForwarding: boolean;
    /** @description The IP address allocated by the gateway to which dns requests can be sent.
     * @since 2019-12-01
     */
    readonly inboundDnsForwardingEndpoint: string;
}
