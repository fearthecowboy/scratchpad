import { NetworkConfigurationDiagnosticProfile } from './NetworkConfigurationDiagnosticProfile';
import { NetworkSecurityGroupResult } from './NetworkSecurityGroupResult';

/**
 * @description Network configuration diagnostic result corresponded to provided traffic query.
 * @since 2019-07-01
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
