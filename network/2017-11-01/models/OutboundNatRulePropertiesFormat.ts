import { SubResource } from './SubResource';
/**
 * @description Outbound NAT pool of the load balancer.
 */
export interface OutboundNatRulePropertiesFormat {
    /**
     * @description The number of outbound ports to be used for NAT.
     */
    allocatedOutboundPorts: int32;
    /**
     * @description The Frontend IP addresses of the load balancer.
     */
    frontendIPConfigurations: Array<SubResource>;
    /**
     * @description A reference to a pool of DIPs. Outbound traffic is randomly load balanced across IPs in the backend IPs.
     */
    backendAddressPool?: SubResource;
    /**
     * @description Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState: string;
}
