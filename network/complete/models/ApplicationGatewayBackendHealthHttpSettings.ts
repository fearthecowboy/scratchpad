import { ApplicationGatewayBackendHealthServer } from './ApplicationGatewayBackendHealthServer';
import { ApplicationGatewayBackendHttpSettings } from './ApplicationGatewayBackendHttpSettings';

/**
 * @description Application gateway BackendHealthHttp settings.
 */
export interface ApplicationGatewayBackendHealthHttpSettings {
    /**
     * @description Reference of an ApplicationGatewayBackendHttpSettings resource.
     */
    backendHttpSettings: ApplicationGatewayBackendHttpSettings;
    /**
     * @description List of ApplicationGatewayBackendHealthServer resources.
     */
    servers: Array<ApplicationGatewayBackendHealthServer>;
}
