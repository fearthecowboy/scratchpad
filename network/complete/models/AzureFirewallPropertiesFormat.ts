import { AzureFirewallThreatIntelMode } from '../enums/AzureFirewallThreatIntelMode';
import { ProvisioningState } from '../enums/ProvisioningState';
import { AzureFirewallApplicationRuleCollection } from './AzureFirewallApplicationRuleCollection';
import { AzureFirewallIPConfiguration } from './AzureFirewallIPConfiguration';
import { AzureFirewallIpGroups } from "./AzureFirewallIpGroups";
import { AzureFirewallNatRuleCollection } from './AzureFirewallNatRuleCollection';
import { AzureFirewallNetworkRuleCollection } from './AzureFirewallNetworkRuleCollection';
import { AzureFirewallSku } from "./AzureFirewallSku";
import { HubIPAddresses } from './HubIPAddresses';
import { SubResource } from './SubResource';

/**
 * @description Properties of the Azure Firewall.
 * @since 2019-07-01
 */
export interface AzureFirewallPropertiesFormat {
    /**
     * @description Collection of application rule collections used by Azure Firewall.
     */
    applicationRuleCollections: Array<AzureFirewallApplicationRuleCollection>;
    /**
     * @description Collection of NAT rule collections used by Azure Firewall.
     */
    natRuleCollections: Array<AzureFirewallNatRuleCollection>;
    /**
     * @description Collection of network rule collections used by Azure Firewall.
     */
    networkRuleCollections: Array<AzureFirewallNetworkRuleCollection>;
    /**
     * @description IP configuration of the Azure Firewall resource.
     */
    ipConfigurations: Array<AzureFirewallIPConfiguration>;
    /**
     * @description The provisioning state of the Azure firewall resource.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description The operation mode for Threat Intelligence.
     */
    threatIntelMode: AzureFirewallThreatIntelMode | string;
    /**
     * @description The virtualHub to which the firewall belongs.
     */
    virtualHub: SubResource;
    /**
     * @description The firewallPolicy associated with this azure firewall.
     */
    firewallPolicy: SubResource;
    /**
     * @description IP addresses associated with AzureFirewall.
     */
    readonly hubIpAddresses: HubIPAddresses;
    /** @description IP configuration of the Azure Firewall used for management traffic.
     * @since 2019-12-01
     */
    managementIpConfiguration: AzureFirewallIPConfiguration;
    /** @description IpGroups associated with AzureFirewall.
     * @since 2019-12-01
     */
    readonly ipGroups: Array<AzureFirewallIpGroups>;
    /** @description The Azure Firewall Resource SKU.
     * @since 2019-12-01
     */
    sku: AzureFirewallSku;
    /** @description The additional properties used to further config this azure firewall.
     * @since 2019-12-01
     */
    additionalProperties: Dictionary<string>;
}
