
/**
 * @description AAD Vpn authentication type related parameters.
 */
export interface AadAuthenticationParameters {
    /**
     * @description AAD Vpn authentication parameter AAD tenant.
     */
    aadTenant: string;
    /**
     * @description AAD Vpn authentication parameter AAD audience.
     */
    aadAudience: string;
    /**
     * @description AAD Vpn authentication parameter AAD issuer.
     */
    aadIssuer: string;
}
