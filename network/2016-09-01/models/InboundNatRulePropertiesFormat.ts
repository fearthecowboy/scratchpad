import { SubResource } from './SubResource';
import { NetworkInterfaceIPConfiguration } from './NetworkInterfaceIPConfiguration';
import { TransportProtocol } from '../enums/TransportProtocol';
/**
 * @description Properties of the inbound NAT rule.
 */
export interface InboundNatRulePropertiesFormat {
    /**
     * @description A reference to frontend IP addresses.
     */
    frontendIPConfiguration: SubResource;
    /**
     * @description A reference to a private IP address defined on a network interface of a VM. Traffic sent to the frontend port of each of the frontend IP configurations is forwarded to the backed IP.
     */
    readonly backendIPConfiguration: NetworkInterfaceIPConfiguration;
    /**
     * @description The transport protocol for the endpoint. Possible values are: 'Udp' or 'Tcp'
     */
    protocol: TransportProtocol | string;
    /**
     * @description The port for the external endpoint. Port numbers for each rule must be unique within the Load Balancer. Acceptable values range from 1 to 65534.
     */
    frontendPort: int32;
    /**
     * @description The port used for the internal endpoint. Acceptable values range from 1 to 65535.
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
     * @description Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState: string;
}
