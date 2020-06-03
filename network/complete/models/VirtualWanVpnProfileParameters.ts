import { AuthenticationMethod } from '../enums/AuthenticationMethod';

/**
 * @description Virtual Wan Vpn profile parameters Vpn profile generation.
 * @since 2019-12-01
 */
export interface VirtualWanVpnProfileParameters {
    /**
     * @description VpnServerConfiguration partial resource uri with which VirtualWan is associated to.
     */
    vpnServerConfigurationResourceId: string;
    /**
     * @description VPN client authentication method.
     */
    authenticationMethod: AuthenticationMethod | string;
}
