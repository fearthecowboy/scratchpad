import { AzureFirewallApplicationRuleCollection } from './AzureFirewallApplicationRuleCollection';
import { AzureFirewallNatRuleCollection } from './AzureFirewallNatRuleCollection';
import { AzureFirewallNetworkRuleCollection } from './AzureFirewallNetworkRuleCollection';
import { AzureFirewallIPConfiguration } from './AzureFirewallIPConfiguration';
import { ProvisioningState } from '../enums/ProvisioningState';
import { AzureFirewallThreatIntelMode } from '../enums/AzureFirewallThreatIntelMode';
import { SubResource } from './SubResource';
import { HubIPAddresses } from './HubIPAddresses';
import { AzureFirewallIpGroups } from './AzureFirewallIpGroups';
import { AzureFirewallSku } from './AzureFirewallSku';
/**
 * @description Properties of the Azure Firewall.
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
     * @description IP configuration of the Azure Firewall used for management traffic.
     */
    managementIpConfiguration: AzureFirewallIPConfiguration;
    /**
     * @description The provisioning state of the Azure firewall resource.
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
    /**
     * @description IpGroups associated with AzureFirewall.
     */
    readonly ipGroups: Array<AzureFirewallIpGroups>;
    /**
     * @description The Azure Firewall Resource SKU.
     */
    sku: AzureFirewallSku;
    /**
     * @description The additional properties used to further config this azure firewall.
     */
    additionalProperties: Dictionary<string>;
}
