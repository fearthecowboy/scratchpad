import { ProvisioningState } from "../enums/ProvisioningState";
import { FlowLog } from "./FlowLog";
import { NetworkInterface } from './NetworkInterface';
import { SecurityRule } from './SecurityRule';
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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly defaultSecurityRules: Array<SecurityRule>;
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
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly resourceGuid: string;
    /**
     * @description The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description A collection of references to flow log resources.
     * @since 2019-12-01
     */
    readonly flowLogs: Array<FlowLog>;
}
