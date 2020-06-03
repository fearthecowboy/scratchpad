
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
     */
    provisioningState: string;
}
