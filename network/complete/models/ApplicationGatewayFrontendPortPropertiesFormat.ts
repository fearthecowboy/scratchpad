import { ProvisioningState } from "../enums/ProvisioningState";

/**
 * @description Properties of Frontend port of an application gateway.
 */
export interface ApplicationGatewayFrontendPortPropertiesFormat {
    /**
     * @description Frontend port
     */
    port: int32;
    /**
     * @description Provisioning state of the frontend port resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
}
