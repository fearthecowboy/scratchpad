import { ExpressRouteLinkMacSecCipher } from '../enums/ExpressRouteLinkMacSecCipher';
/**
 * Definition of ExpressRouteLink Mac Security configuration.
 * @description ExpressRouteLink Mac Security Configuration.
 */
export interface ExpressRouteLinkMacSecConfig {
    /**
     * @description Keyvault Secret Identifier URL containing Mac security CKN key.
     */
    cknSecretIdentifier: string;
    /**
     * @description Keyvault Secret Identifier URL containing Mac security CAK key.
     */
    cakSecretIdentifier: string;
    /**
     * @description Mac security cipher.
     */
    cipher: ExpressRouteLinkMacSecCipher | string;
}
