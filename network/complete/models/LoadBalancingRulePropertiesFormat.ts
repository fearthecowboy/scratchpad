import { LoadDistribution } from '../enums/LoadDistribution';
import { ProvisioningState } from "../enums/ProvisioningState";
import { TransportProtocol } from '../enums/TransportProtocol';
import { SubResource } from './SubResource';

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
     * @description The reference of the load balancer probe used by the load balancing rule.
     */
    probe: SubResource;
    /**
     * @description The transport protocol for the external endpoint. Possible values are 'Udp' or 'Tcp'
     */
    protocol?: TransportProtocol | string;
    /**
     * @description The load distribution policy for this rule. Possible values are 'Default', 'SourceIP', and 'SourceIPProtocol'.
     */
    loadDistribution: LoadDistribution | string;
    /**
     * @description The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values are between 1 and 65534.
     */
    frontendPort?: int32;
    /**
     * @description The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
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
     * @description Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description Configures SNAT for the VMs in the backend pool to use the publicIP address specified in the frontend of the load balancing rule.
     * @since 2017-11-01
     */
    disableOutboundSnat: boolean;
    /** @description Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
     * @since 2019-07-01
     */
    enableTcpReset: boolean;
}
