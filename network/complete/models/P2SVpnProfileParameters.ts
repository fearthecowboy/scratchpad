import { AuthenticationMethod } from '../enums/AuthenticationMethod';

/**
 * @description Vpn Client Parameters for package generation.
 * @since 2019-07-01
 */
export interface P2SVpnProfileParameters {
    /**
     * @description VPN client authentication method.
     */
    authenticationMethod: AuthenticationMethod | string;
}
