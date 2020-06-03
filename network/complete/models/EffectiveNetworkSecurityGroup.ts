import { EffectiveNetworkSecurityGroupAssociation } from './EffectiveNetworkSecurityGroupAssociation';
import { EffectiveNetworkSecurityRule } from './EffectiveNetworkSecurityRule';
import { SubResource } from './SubResource';

/**
 * @description Effective network security group.
 */
export interface EffectiveNetworkSecurityGroup {
    /**
     * @description The ID of network security group that is applied.
     */
    networkSecurityGroup: SubResource;
    association: EffectiveNetworkSecurityGroupAssociation;
    /**
     * @description A collection of effective security rules.
     */
    effectiveSecurityRules: Array<EffectiveNetworkSecurityRule>;
    /** @description Mapping of tags to list of IP Addresses included within the tag.
     * @since 2017-11-01
     */
    tagMap: any;
}
