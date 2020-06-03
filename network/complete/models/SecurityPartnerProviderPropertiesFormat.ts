import { ProvisioningState } from '../enums/ProvisioningState';
import { SecurityPartnerProviderConnectionStatus } from '../enums/SecurityPartnerProviderConnectionStatus';
import { SecurityProviderName } from '../enums/SecurityProviderName';
import { SubResource } from './SubResource';
/**
 * @description Properties of the Security Partner Provider.
 * @since 2020-04-01
 */
export interface SecurityPartnerProviderPropertiesFormat {
    /**
     * @description The provisioning state of the Security Partner Provider resource.
     */
    readonly provisioningState: ProvisioningState | string;
    /**
     * @description The security provider name.
     */
    securityProviderName: SecurityProviderName | string;
    /**
     * @description The connection status with the Security Partner Provider.
     */
    readonly connectionStatus: SecurityPartnerProviderConnectionStatus | string;
    /**
     * @description The virtualHub to which the Security Partner Provider belongs.
     */
    virtualHub: SubResource;
}
