import { SubResource } from './SubResource';
import { TransportProtocol } from '../enums/TransportProtocol';
/**
 * @description Properties of Inbound NAT pool.
 */
export interface InboundNatPoolPropertiesFormat {
    /**
     * @description A reference to frontend IP addresses.
     */
    frontendIPConfiguration: SubResource;
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
     * @description The timeout for the TCP idle connection. The value can be set between 4 and 30 minutes. The default value is 4 minutes. This element is only used when the protocol is set to TCP.
     */
    idleTimeoutInMinutes: int32;
    /**
     * @description Configures a virtual machine's endpoint for the floating IP capability required to configure a SQL AlwaysOn Availability Group. This setting is required when using the SQL AlwaysOn Availability Groups in SQL server. This setting can't be changed after you create the endpoint.
     */
    enableFloatingIP: boolean;
    /**
     * @description Gets the provisioning state of the PublicIP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState: string;
}
