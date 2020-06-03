import { ExpressRouteLinkMacSecCipher } from '../enums/ExpressRouteLinkMacSecCipher';

/**
 * Definition of ExpressRouteLink Mac Security configuration.
 * @description ExpressRouteLink Mac Security Configuration.
 * @since 2019-07-01
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
