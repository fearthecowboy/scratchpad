import { Direction } from '../enums/Direction';
/**
 * @description Parameters to compare with network configuration.
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
     * @description Traffic destination port. Accepted values are '*' and a single port in the range (0 - 65535).
     */
    destinationPort?: string;
}
