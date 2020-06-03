import { ProvisioningState } from "../enums/ProvisioningState";
import { TransportProtocol } from '../enums/TransportProtocol';
import { SubResource } from './SubResource';

/**
 * @description Properties of Inbound NAT pool.
 */
export interface InboundNatPoolPropertiesFormat {
    /**
     * @description A reference to frontend IP addresses.
     */
    frontendIPConfiguration: SubResource;
    /**
     * @description The transport protocol for the endpoint. Possible values are: 'Udp' or 'Tcp'.
     */
    protocol?: TransportProtocol | string;
    /**
     * @description The first port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65534.
     */
    frontendPortRangeStart?: int32;
    /**
     * @description The last port number in the range of external ports that will be used to provide Inbound Nat to NICs associated with a load balancer. Acceptable values range between 1 and 65535.
     */
    frontendPortRangeEnd?: int32;
    /**
     * @description The port used for internal connections on the endpoint. Acceptable values are between 1 and 65535.
     */
    backendPort?: int32;
    /**
     * @description Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
     * @since 2017-11-01
     */
    idleTimeoutInMinutes: int32;
    /** @description Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
     * @since 2017-11-01
     */
    enableFloatingIP: boolean;
    /** @description Receive bidirectional TCP Reset on TCP flow idle timeout or unexpected connection termination. This element is only used when the protocol is set to TCP.
     * @since 2019-07-01
     */
    enableTcpReset: boolean;
}
