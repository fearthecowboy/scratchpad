
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
     */
    provisioningState: string;
}
