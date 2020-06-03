import { ProvisioningState } from "../enums/ProvisioningState";

/**
 * @description Authentication certificates properties of an application gateway.
 */
export interface ApplicationGatewayAuthenticationCertificatePropertiesFormat {
    /**
     * @description Certificate public data.
     */
    data: string;
    /**
     * @description Provisioning state of the authentication certificate resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
}
