import { ProvisioningState } from "../enums/ProvisioningState";
import { BackendAddressPool } from './BackendAddressPool';
import { FrontendIPConfiguration } from './FrontendIPConfiguration';
import { InboundNatPool } from './InboundNatPool';
import { InboundNatRule } from './InboundNatRule';
import { LoadBalancingRule } from './LoadBalancingRule';
import { OutboundNatRule } from './OutboundNatRule';
import { OutboundRule } from "./OutboundRule";
import { Probe } from './Probe';

/**
 * @description Properties of the load balancer.
 */
export interface LoadBalancerPropertiesFormat {
    /**
     * @description Object representing the frontend IPs to be used for the load balancer
     */
    frontendIPConfigurations: Array<FrontendIPConfiguration>;
    /**
     * @description Collection of backend address pools used by a load balancer
     */
    backendAddressPools: Array<BackendAddressPool>;
    /**
     * @description Object collection representing the load balancing rules Gets the provisioning
     */
    loadBalancingRules: Array<LoadBalancingRule>;
    /**
     * @description Collection of probe objects used in the load balancer
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
     * @description The outbound NAT rules.
     * @deleted 2019-07-01
     */
    outboundNatRules: Array<OutboundNatRule>;
    /**
     * @description The resource GUID property of the load balancer resource.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly resourceGuid: string;
    /**
     * @description Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description The outbound rules.
     * @since 2019-07-01
     */
    outboundRules: Array<OutboundRule>;
}
