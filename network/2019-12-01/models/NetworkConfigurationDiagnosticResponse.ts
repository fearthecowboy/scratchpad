import { NetworkConfigurationDiagnosticResult } from './NetworkConfigurationDiagnosticResult';
/**
 * @description Results of network configuration diagnostic on the target resource.
 */
export interface NetworkConfigurationDiagnosticResponse {
    /**
     * @description List of network configuration diagnostic results.
     */
    readonly results: Array<NetworkConfigurationDiagnosticResult>;
}
