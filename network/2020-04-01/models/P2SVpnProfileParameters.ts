import { AuthenticationMethod } from '../enums/AuthenticationMethod';
/**
 * @description Vpn Client Parameters for package generation.
 */
export interface P2SVpnProfileParameters {
    /**
     * @description VPN client authentication method.
     */
    authenticationMethod: AuthenticationMethod | string;
}
