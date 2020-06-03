import { SubResource } from './SubResource';
import { ProvisioningState } from '../enums/ProvisioningState';
import { LoadBalancerOutboundRuleProtocol } from '../enums/LoadBalancerOutboundRuleProtocol';
/**
 * @description Outbound rule of the load balancer.
 */
export interface OutboundRulePropertiesFormat {
    /**
     * @description The number of outbound ports to be used for NAT.
     */
    allocatedOutboundPorts: int32;
    /**
     * @description The Frontend IP addresses of the load balancer.
     */
    frontendIPConfigurations?: Array<SubResource>;
    /**
     * @description A reference to a pool of DIPs. Outbound traffic is randomly load balanced across IPs in the backend IPs.
     */
    backendAddressPool?: SubResource;
    /**
     * @description The provisioning state of the outbound rule resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description The protocol for the outbound rule in load balancer.
     */
    protocol?: LoadBalancerOutboundRuleProtocol | string;
    /**
     * @description Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
     */
    enableTcpReset: boolean;
    /**
     * @description The timeout for the TCP idle connection.
     */
    idleTimeoutInMinutes: int64;
}
