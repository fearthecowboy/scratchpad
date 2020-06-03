import { AzureFirewallApplicationRuleCollection } from './AzureFirewallApplicationRuleCollection';
import { AzureFirewallNatRuleCollection } from './AzureFirewallNatRuleCollection';
import { AzureFirewallNetworkRuleCollection } from './AzureFirewallNetworkRuleCollection';
import { AzureFirewallIPConfiguration } from './AzureFirewallIPConfiguration';
import { ProvisioningState } from '../enums/ProvisioningState';
import { AzureFirewallThreatIntelMode } from '../enums/AzureFirewallThreatIntelMode';
import { SubResource } from './SubResource';
import { HubIPAddresses } from './HubIPAddresses';
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
     * @description The provisioning state of the Azure firewall resource.
     */
    provisioningState: ProvisioningState | string;
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
}
