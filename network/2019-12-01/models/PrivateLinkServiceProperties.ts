import { FrontendIPConfiguration } from './FrontendIPConfiguration';
import { PrivateLinkServiceIpConfiguration } from './PrivateLinkServiceIpConfiguration';
import { NetworkInterface } from './NetworkInterface';
import { ProvisioningState } from '../enums/ProvisioningState';
import { PrivateEndpointConnection } from './PrivateEndpointConnection';
/**
 * @description Properties of the private link service.
 */
export interface PrivateLinkServiceProperties {
    /**
     * @description An array of references to the load balancer IP configurations.
     */
    loadBalancerFrontendIpConfigurations: Array<FrontendIPConfiguration>;
    /**
     * @description An array of private link service IP configurations.
     */
    ipConfigurations: Array<PrivateLinkServiceIpConfiguration>;
    /**
     * @description An array of references to the network interfaces created for this private link service.
     */
    readonly networkInterfaces: Array<NetworkInterface>;
    /**
     * @description The provisioning state of the private link service resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description An array of list about connections to the private endpoint.
     */
    readonly privateEndpointConnections: Array<PrivateEndpointConnection>;
    /**
     * @description The visibility list of the private link service.
     */
    visibility: {};
    /**
     * @description The auto-approval list of the private link service.
     */
    autoApproval: {};
    /**
     * @description The list of Fqdn.
     */
    fqdns: Array<string>;
    /**
     * @description The alias of the private link service.
     */
    readonly alias: string ;
    /**
     * @description Whether the private link service is enabled for proxy protocol or not.
     */
    enableProxyProtocol: boolean;
}
