import { SubResource } from './SubResource';
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
    ipConfiguration: SubResource;
    /**
     * @description Health of backend server. Possible values are: 'Unknown', 'Up', 'Down', and 'Partial'.
     */
    health: ApplicationGatewayBackendHealthServerHealth | string;
}
