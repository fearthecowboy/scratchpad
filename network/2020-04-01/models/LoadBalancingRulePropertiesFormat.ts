import { SubResource } from './SubResource';
import { TransportProtocol } from '../enums/TransportProtocol';
import { LoadDistribution } from '../enums/LoadDistribution';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of the load balancer.
 */
export interface LoadBalancingRulePropertiesFormat {
    /**
     * @description A reference to frontend IP addresses.
     */
    frontendIPConfiguration: SubResource;
    /**
     * @description A reference to a pool of DIPs. Inbound traffic is randomly load balanced across IPs in the backend IPs.
     */
    backendAddressPool: SubResource;
    /**
     * @description The reference to the load balancer probe used by the load balancing rule.
     */
    probe: SubResource;
    /**
     * @description The reference to the transport protocol used by the load balancing rule.
     */
    protocol?: TransportProtocol | string;
    /**
     * @description The load distribution policy for this rule.
     */
    loadDistribution: LoadDistribution | string;
    /**
     * @description The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 0 and 65534. Note that value 0 enables "Any Port".
     */
    frontendPort?: int32;
    /**
     * @description The port used for internal connections on the endpoint. Acceptable values are between 0 and 65535. Note that value 0 enables "Any Port".
     */
    backendPort: int32;
    /**
     * @description The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
     */
    idleTimeoutInMinutes: int32;
    /**
     * @description Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
     */
    enableFloatingIP: boolean;
    /**
     * @description Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
     */
    enableTcpReset: boolean;
    /**
     * @description Configures SNAT for the VMs in the backend pool to use the publicIP address specified in the frontend of the load balancing rule.
     */
    disableOutboundSnat: boolean;
    /**
     * @description The provisioning state of the load balancing rule resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
