import { Direction } from '../enums/Direction';

/**
 * @description Parameters to compare with network configuration.
 * @since 2019-07-01
 */
export interface NetworkConfigurationDiagnosticProfile {
    /**
     * @description The direction of the traffic.
     */
    direction?: Direction | string;
    /**
     * @description Protocol to be verified on. Accepted values are '*', TCP, UDP.
     */
    protocol?: string;
    /**
     * @description Traffic source. Accepted values are '*', IP Address/CIDR, Service Tag.
     */
    source?: string;
    /**
     * @description Traffic destination. Accepted values are: '*', IP Address/CIDR, Service Tag.
     */
    destination?: string;
    /**
     * @description Traffic destination port. Accepted values are '*', port (for example, 3389) and port range (for example, 80-100).
     */
    destinationPort?: string;
}
