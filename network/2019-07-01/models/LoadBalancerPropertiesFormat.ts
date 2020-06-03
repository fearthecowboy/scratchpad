import { FrontendIPConfiguration } from './FrontendIPConfiguration';
import { BackendAddressPool } from './BackendAddressPool';
import { LoadBalancingRule } from './LoadBalancingRule';
import { Probe } from './Probe';
import { InboundNatRule } from './InboundNatRule';
import { InboundNatPool } from './InboundNatPool';
import { OutboundRule } from './OutboundRule';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of the load balancer.
 */
export interface LoadBalancerPropertiesFormat {
    /**
     * @description Object representing the frontend IPs to be used for the load balancer.
     */
    frontendIPConfigurations: Array<FrontendIPConfiguration>;
    /**
     * @description Collection of backend address pools used by a load balancer.
     */
    backendAddressPools: Array<BackendAddressPool>;
    /**
     * @description Object collection representing the load balancing rules Gets the provisioning.
     */
    loadBalancingRules: Array<LoadBalancingRule>;
    /**
     * @description Collection of probe objects used in the load balancer.
     */
    probes: Array<Probe>;
    /**
     * @description Collection of inbound NAT Rules used by a load balancer. Defining inbound NAT rules on your load balancer is mutually exclusive with defining an inbound NAT pool. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an Inbound NAT pool. They have to reference individual inbound NAT rules.
     */
    inboundNatRules: Array<InboundNatRule>;
    /**
     * @description Defines an external port range for inbound NAT to a single backend port on NICs associated with a load balancer. Inbound NAT rules are created automatically for each NIC associated with the Load Balancer using an external port from this range. Defining an Inbound NAT pool on your Load Balancer is mutually exclusive with defining inbound Nat rules. Inbound NAT pools are referenced from virtual machine scale sets. NICs that are associated with individual virtual machines cannot reference an inbound NAT pool. They have to reference individual inbound NAT rules.
     */
    inboundNatPools: Array<InboundNatPool>;
    /**
     * @description The outbound rules.
     */
    outboundRules: Array<OutboundRule>;
    /**
     * @description The resource GUID property of the load balancer resource.
     */
    resourceGuid: string;
    /**
     * @description The provisioning state of the load balancer resource.
     */
    provisioningState: ProvisioningState | string;
}
