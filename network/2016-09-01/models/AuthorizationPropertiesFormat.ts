import { AuthorizationUseStatus } from '../enums/AuthorizationUseStatus';
export interface AuthorizationPropertiesFormat {
    /**
     * @description The authorization key.
     */
    authorizationKey: string;
    /**
     * @description AuthorizationUseStatus. Possible values are: 'Available' and 'InUse'.
     */
    authorizationUseStatus: AuthorizationUseStatus | string;
    /**
     * @description Gets the provisioning state of the public IP resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState: string;
}
