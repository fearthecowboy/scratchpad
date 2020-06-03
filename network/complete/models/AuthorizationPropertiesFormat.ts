import { AuthorizationUseStatus } from '../enums/AuthorizationUseStatus';
import { ProvisioningState } from "../enums/ProvisioningState";

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
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
}
