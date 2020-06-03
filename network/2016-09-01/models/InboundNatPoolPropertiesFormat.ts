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
     */
    provisioningState: string;
}
