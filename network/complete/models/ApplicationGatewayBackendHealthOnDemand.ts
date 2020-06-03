import { ApplicationGatewayBackendAddressPool } from './ApplicationGatewayBackendAddressPool';
import { ApplicationGatewayBackendHealthHttpSettings } from './ApplicationGatewayBackendHealthHttpSettings';

/**
 * @description Result of on demand test probe.
 * @since 2019-07-01
 */
export interface ApplicationGatewayBackendHealthOnDemand {
    /**
     * @description Reference of an ApplicationGatewayBackendAddressPool resource.
     */
    backendAddressPool: ApplicationGatewayBackendAddressPool;
    /**
     * @description Application gateway BackendHealthHttp settings.
     */
    backendHealthHttpSettings: ApplicationGatewayBackendHealthHttpSettings;
}
