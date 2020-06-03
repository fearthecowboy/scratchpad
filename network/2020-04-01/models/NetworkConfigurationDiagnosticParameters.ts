import { VerbosityLevel } from '../enums/VerbosityLevel';
import { NetworkConfigurationDiagnosticProfile } from './NetworkConfigurationDiagnosticProfile';
/**
 * @description Parameters to get network configuration diagnostic.
 */
export interface NetworkConfigurationDiagnosticParameters {
    /**
     * @description The ID of the target resource to perform network configuration diagnostic. Valid options are VM, NetworkInterface, VMSS/NetworkInterface and Application Gateway.
     */
    targetResourceId?: string;
    /**
     * @description Verbosity level.
     */
    verbosityLevel: VerbosityLevel | string;
    /**
     * @description List of network configuration diagnostic profiles.
     */
    profiles?: Array<NetworkConfigurationDiagnosticProfile>;
}
