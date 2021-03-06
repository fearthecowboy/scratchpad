import { ApplicationGatewayBackendHttpSettings } from './ApplicationGatewayBackendHttpSettings';
import { ApplicationGatewayBackendHealthServer } from './ApplicationGatewayBackendHealthServer';
/**
 * @description Application gateway BackendHealthHttp settings.
 */
export interface ApplicationGatewayBackendHealthHttpSettings {
    /**
     * @description Reference to an ApplicationGatewayBackendHttpSettings resource.
     */
    backendHttpSettings: ApplicationGatewayBackendHttpSettings;
    /**
     * @description List of ApplicationGatewayBackendHealthServer resources.
     */
    servers: Array<ApplicationGatewayBackendHealthServer>;
}
