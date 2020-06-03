import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Authentication certificates properties of an application gateway.
 */
export interface ApplicationGatewayAuthenticationCertificatePropertiesFormat {
    /**
     * @description Certificate public data.
     */
    data: string;
    /**
     * @description The provisioning state of the authentication certificate resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
