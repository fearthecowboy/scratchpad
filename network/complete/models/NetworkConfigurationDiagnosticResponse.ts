import { NetworkConfigurationDiagnosticResult } from './NetworkConfigurationDiagnosticResult';

/**
 * @description Results of network configuration diagnostic on the target resource.
 * @since 2019-07-01
 */
export interface NetworkConfigurationDiagnosticResponse {
    /**
     * @description List of network configuration diagnostic results.
     */
    readonly results: Array<NetworkConfigurationDiagnosticResult>;
}
