import { SubResource } from './SubResource';
import { EffectiveNetworkSecurityGroupAssociation } from './EffectiveNetworkSecurityGroupAssociation';
import { EffectiveNetworkSecurityRule } from './EffectiveNetworkSecurityRule';
/**
 * @description Effective network security group.
 */
export interface EffectiveNetworkSecurityGroup {
    /**
     * @description The ID of network security group that is applied.
     */
    networkSecurityGroup: SubResource;
    /**
     * @description Associated resources.
     */
    association: EffectiveNetworkSecurityGroupAssociation;
    /**
     * @description A collection of effective security rules.
     */
    effectiveSecurityRules: Array<EffectiveNetworkSecurityRule>;
    /**
     * @description Mapping of tags to list of IP Addresses included within the tag.
     */
    tagMap: any;
}
