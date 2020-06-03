import { ApplicationGatewayBackendHealthPool } from './ApplicationGatewayBackendHealthPool';
/**
 * @description Response for ApplicationGatewayBackendHealth API service call.
 */
export interface ApplicationGatewayBackendHealth {
    /**
     * @description A list of ApplicationGatewayBackendHealthPool resources.
     */
    backendAddressPools: Array<ApplicationGatewayBackendHealthPool>;
}
