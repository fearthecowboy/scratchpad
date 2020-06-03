
/**
 * @description List of Vpn-Sites.
 */
export interface GetVpnSitesConfigurationRequest {
    /**
     * @description List of resource-ids of the vpn-sites for which config is to be downloaded.
     */
    vpnSites: Array<string>;
    /**
     * @description The sas-url to download the configurations for vpn-sites.
     */
    outputBlobSasUrl?: string;
}
