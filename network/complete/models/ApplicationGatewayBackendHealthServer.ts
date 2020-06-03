import { ApplicationGatewayBackendHealthServerHealth } from '../enums/ApplicationGatewayBackendHealthServerHealth';
import { NetworkInterfaceIPConfiguration } from "./NetworkInterfaceIPConfiguration";

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
     * @Type  '2017-11-01' - type changed from 'SubResource' to 'NetworkInterfaceIPConfiguration'
     */
    ipConfiguration: NetworkInterfaceIPConfiguration;
    /**
     * @description Health of backend server. Possible values are: 'Unknown', 'Up', 'Down', and 'Partial'.
     */
    health: ApplicationGatewayBackendHealthServerHealth | string;
    /** @description Health Probe Log.
     * @since 2019-07-01
     */
    healthProbeLog: string;
}
