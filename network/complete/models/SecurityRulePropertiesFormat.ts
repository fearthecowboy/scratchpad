import { ProvisioningState } from "../enums/ProvisioningState";
import { SecurityRuleAccess } from '../enums/SecurityRuleAccess';
import { SecurityRuleDirection } from '../enums/SecurityRuleDirection';
import { SecurityRuleProtocol } from '../enums/SecurityRuleProtocol';
import { ApplicationSecurityGroup } from "./ApplicationSecurityGroup";

export interface SecurityRulePropertiesFormat {
    /**
     * @description A description for this rule. Restricted to 140 chars.
     */
    description: string;
    /**
     * @description Network protocol this rule applies to. Possible values are 'Tcp', 'Udp', and '*'.
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
     * @Optional  '2017-11-01' - made property required
     */
    sourceAddressPrefix: string;
    /**
     * @description The destination address prefix. CIDR or source IP range. Asterisk '*' can also be used to match all source IPs. Default tags such as 'VirtualNetwork', 'AzureLoadBalancer' and 'Internet' can also be used.
     * @Optional  '2017-11-01' - made property required
     */
    destinationAddressPrefix: string;
    /**
     * @description The network traffic is allowed or denied. Possible values are: 'Allow' and 'Deny'.
     */
    access?: SecurityRuleAccess | string;
    /**
     * @description The priority of the rule. The value can be between 100 and 4096. The priority number must be unique for each rule in the collection. The lower the priority number, the higher the priority of the rule.
     */
    priority: int32;
    /**
     * @description The direction of the rule. The direction specifies if rule will be evaluated on incoming or outgoing traffic. Possible values are: 'Inbound' and 'Outbound'.
     */
    direction?: SecurityRuleDirection | string;
    /**
     * @description The provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description The CIDR or source IP ranges.
     * @since 2017-11-01
     */
    sourceAddressPrefixes: Array<string>;
    /** @description The application security group specified as source.
     * @since 2017-11-01
     */
    sourceApplicationSecurityGroups: Array<ApplicationSecurityGroup>;
    /** @description The destination address prefixes. CIDR or destination IP ranges.
     * @since 2017-11-01
     */
    destinationAddressPrefixes: Array<string>;
    /** @description The application security group specified as destination.
     * @since 2017-11-01
     */
    destinationApplicationSecurityGroups: Array<ApplicationSecurityGroup>;
    /** @description The source port ranges.
     * @since 2017-11-01
     */
    sourcePortRanges: Array<string>;
    /** @description The destination port ranges.
     * @since 2017-11-01
     */
    destinationPortRanges: Array<string>;
}
