import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of Frontend port of an application gateway.
 */
export interface ApplicationGatewayFrontendPortPropertiesFormat {
    /**
     * @description Frontend port.
     */
    port: int32;
    /**
     * @description The provisioning state of the frontend port resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
