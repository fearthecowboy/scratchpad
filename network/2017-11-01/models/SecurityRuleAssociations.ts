import { NetworkInterfaceAssociation } from './NetworkInterfaceAssociation';
import { SubnetAssociation } from './SubnetAssociation';
import { SecurityRule } from './SecurityRule';
import { EffectiveNetworkSecurityRule } from './EffectiveNetworkSecurityRule';
/**
 * @description All security rules associated with the network interface.
 */
export interface SecurityRuleAssociations {
    networkInterfaceAssociation: NetworkInterfaceAssociation;
    subnetAssociation: SubnetAssociation;
    /**
     * @description Collection of default security rules of the network security group.
     */
    defaultSecurityRules: Array<SecurityRule>;
    /**
     * @description Collection of effective security rules.
     */
    effectiveSecurityRules: Array<EffectiveNetworkSecurityRule>;
}
