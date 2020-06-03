import { SecurityRule } from './SecurityRule';
/**
 * @description Network interface and its custom security rules.
 */
export interface SubnetAssociation {
    /**
     * @description Subnet ID.
     */
    readonly id: string ;
    /**
     * @description Collection of custom security rules.
     */
    securityRules: Array<SecurityRule>;
}
