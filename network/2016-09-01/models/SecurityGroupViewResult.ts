import { SecurityGroupNetworkInterface } from './SecurityGroupNetworkInterface';
/**
 * @description The information about security rules applied to the specified VM.
 */
export interface SecurityGroupViewResult {
    /**
     * @description List of network interfaces on the specified VM.
     */
    networkInterfaces: Array<SecurityGroupNetworkInterface>;
}
