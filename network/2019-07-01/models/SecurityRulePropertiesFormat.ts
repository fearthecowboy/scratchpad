import { SecurityRuleProtocol } from '../enums/SecurityRuleProtocol';
import { ApplicationSecurityGroup } from './ApplicationSecurityGroup';
import { SecurityRuleAccess } from '../enums/SecurityRuleAccess';
import { SecurityRuleDirection } from '../enums/SecurityRuleDirection';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Security rule resource.
 */
export interface SecurityRulePropertiesFormat {
    /**
     * @description A description for this rule. Restricted to 140 chars.
     */
    description: string;
    /**
     * @description Network protocol this rule applies to.
     */
    protocol?: SecurityRuleProtocol | string;
    /**
     * @description The source port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
     */
    sourcePortRange: string;
    /**
     * @description The destination port or range. Integer or range between 0 and 65535. Asterisk '*' can also be used to match all ports.
     */
    destinationPortRange: string;
    /**
     * @description The CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used. If this is an ingress rule, specifies where network traffic originates from.
     */
    sourceAddressPrefix: string;
    /**
     * @description The CIDR or source IP ranges.
     */
    sourceAddressPrefixes: Array<string>;
    /**
     * @description The application security group specified as source.
     */
    sourceApplicationSecurityGroups: Array<ApplicationSecurityGroup>;
    /**
     * @description The destination address prefix. CIDR or destination IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
     */
    destinationAddressPrefix: string;
    /**
     * @description The destination address prefixes. CIDR or destination IP ranges.
     */
    destinationAddressPrefixes: Array<string>;
    /**
     * @description The application security group specified as destination.
     */
    destinationApplicationSecurityGroups: Array<ApplicationSecurityGroup>;
    /**
     * @description The source port ranges.
     */
    sourcePortRanges: Array<string>;
    /**
     * @description The destination port ranges.
     */
    destinationPortRanges: Array<string>;
    /**
     * @description The network traffic is allowed or denied.
     */
    access?: SecurityRuleAccess | string;
    /**
     * @description The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
     */
    priority: int32;
    /**
     * @description The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic.
     */
    direction?: SecurityRuleDirection | string;
    /**
     * @description The provisioning state of the security rule resource.
     */
    provisioningState: ProvisioningState | string;
}
