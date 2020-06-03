import { AuthenticationMethod } from '../enums/AuthenticationMethod';
/**
 * @description Virtual Wan Vpn profile parameters Vpn profile generation.
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
