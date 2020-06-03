import { NetworkConfigurationDiagnosticProfile } from './NetworkConfigurationDiagnosticProfile';
import { NetworkSecurityGroupResult } from './NetworkSecurityGroupResult';
/**
 * @description Network configuration diagnostic result corresponded to provided traffic query.
 */
export interface NetworkConfigurationDiagnosticResult {
    /**
     * @description Network configuration diagnostic profile.
     */
    profile: NetworkConfigurationDiagnosticProfile;
    /**
     * @description Network security group result.
     */
    networkSecurityGroupResult: NetworkSecurityGroupResult;
}
