
/**
 * @description List of P2S Vpn connection health request.
 * @since 2019-12-01
 */
export interface P2SVpnConnectionHealthRequest {
    /**
     * @description The list of p2s vpn user names whose p2s vpn connection detailed health to retrieve for.
     */
    vpnUserNamesFilter: Array<string>;
    /**
     * @description The sas-url to download the P2S Vpn connection health detail.
     */
    outputBlobSasUrl: string;
}
