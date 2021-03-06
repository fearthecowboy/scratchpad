import { NetworkInterfaceIPConfiguration } from './NetworkInterfaceIPConfiguration';
import { ApplicationGatewayBackendHealthServerHealth } from '../enums/ApplicationGatewayBackendHealthServerHealth';
/**
 * @description Application gateway backendhealth http settings.
 */
export interface ApplicationGatewayBackendHealthServer {
    /**
     * @description IP address or FQDN of backend server.
     */
    address: string;
    /**
     * @description Reference of IP configuration of backend server.
     */
    ipConfiguration: NetworkInterfaceIPConfiguration;
    /**
     * @description Health of backend server.
     */
    health: ApplicationGatewayBackendHealthServerHealth | string;
}
