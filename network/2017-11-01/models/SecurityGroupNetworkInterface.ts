import { SecurityRuleAssociations } from './SecurityRuleAssociations';
/**
 * @description Network interface and all its associated security rules.
 */
export interface SecurityGroupNetworkInterface {
    /**
     * @description ID of the network interface.
     */
    id: string;
    securityRuleAssociations: SecurityRuleAssociations;
}
