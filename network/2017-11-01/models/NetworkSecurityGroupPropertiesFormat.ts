import { SecurityRule } from './SecurityRule';
import { NetworkInterface } from './NetworkInterface';
import { Subnet } from './Subnet';
/**
 * @description Network Security Group resource.
 */
export interface NetworkSecurityGroupPropertiesFormat {
    /**
     * @description A collection of security rules of the network security group.
     */
    securityRules: Array<SecurityRule>;
    /**
     * @description The default security rules of network security group.
     */
    defaultSecurityRules: Array<SecurityRule>;
    /**
     * @description A collection of references to network interfaces.
     */
    readonly networkInterfaces: Array<NetworkInterface>;
    /**
     * @description A collection of references to subnets.
     */
    readonly subnets: Array<Subnet>;
    /**
     * @description The resource GUID property of the network security group resource.
     */
    resourceGuid: string;
    /**
     * @description The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState: string;
}
