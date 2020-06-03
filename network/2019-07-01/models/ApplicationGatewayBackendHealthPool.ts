import { ApplicationGatewayBackendAddressPool } from './ApplicationGatewayBackendAddressPool';
import { ApplicationGatewayBackendHealthHttpSettings } from './ApplicationGatewayBackendHealthHttpSettings';
/**
 * @description Application gateway BackendHealth pool.
 */
export interface ApplicationGatewayBackendHealthPool {
    /**
     * @description Reference of an ApplicationGatewayBackendAddressPool resource.
     */
    backendAddressPool: ApplicationGatewayBackendAddressPool;
    /**
     * @description List of ApplicationGatewayBackendHealthHttpSettings resources.
     */
    backendHttpSettingsCollection: Array<ApplicationGatewayBackendHealthHttpSettings>;
}
