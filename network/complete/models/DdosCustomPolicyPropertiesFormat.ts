import { ProvisioningState } from '../enums/ProvisioningState';
import { ProtocolCustomSettingsFormat } from './ProtocolCustomSettingsFormat';
import { SubResource } from './SubResource';

/**
 * @description DDoS custom policy properties.
 * @since 2019-07-01
 */
export interface DdosCustomPolicyPropertiesFormat {
    /**
     * @description The resource GUID property of the DDoS custom policy resource. It uniquely identifies the resource, even if the user changes its name or migrate the resource across subscriptions or resource groups.
     */
    readonly resourceGuid: string ;
    /**
     * @description The provisioning state of the DDoS custom policy resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description The list of public IPs associated with the DDoS custom policy resource. This list is read-only.
     */
    readonly publicIPAddresses: Array<SubResource>;
    /**
     * @description The protocol-specific DDoS policy customization parameters.
     */
    protocolCustomSettings: Array<ProtocolCustomSettingsFormat>;
}
