import { SecurityRule } from './SecurityRule';
/**
 * @description Subnet and it's custom security rules.
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
