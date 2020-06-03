import { ApplicationGatewayBackendAddressPool } from './ApplicationGatewayBackendAddressPool';
import { ApplicationGatewayBackendHealthHttpSettings } from './ApplicationGatewayBackendHealthHttpSettings';
/**
 * @description Result of on demand test probe.
 */
export interface ApplicationGatewayBackendHealthOnDemand {
    /**
     * @description Reference to an ApplicationGatewayBackendAddressPool resource.
     */
    backendAddressPool: ApplicationGatewayBackendAddressPool;
    /**
     * @description Application gateway BackendHealthHttp settings.
     */
    backendHealthHttpSettings: ApplicationGatewayBackendHealthHttpSettings;
}
