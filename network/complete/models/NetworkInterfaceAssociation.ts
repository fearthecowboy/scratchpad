import { SecurityRule } from './SecurityRule';

/**
 * @description Network interface and its custom security rules.
 */
export interface NetworkInterfaceAssociation {
    /**
     * @description Network interface ID.
     */
    readonly id: string ;
    /**
     * @description Collection of custom security rules.
     */
    securityRules: Array<SecurityRule>;
}
