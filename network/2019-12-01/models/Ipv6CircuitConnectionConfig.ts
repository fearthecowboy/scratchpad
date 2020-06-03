import { CircuitConnectionStatus } from '../enums/CircuitConnectionStatus';
/**
 * @description IPv6 Circuit Connection properties for global reach.
 */
export interface Ipv6CircuitConnectionConfig {
    /**
     * @description /125 IP address space to carve out customer addresses for global reach.
     */
    addressPrefix: string;
    /**
     * @description Express Route Circuit connection state.
     */
    readonly circuitConnectionStatus: CircuitConnectionStatus | string;
}
