import { AuthorizationUseStatus } from '../enums/AuthorizationUseStatus';
import { ProvisioningState } from '../enums/ProvisioningState';
/**
 * @description Properties of ExpressRouteCircuitAuthorization.
 */
export interface AuthorizationPropertiesFormat {
    /**
     * @description The authorization key.
     */
    authorizationKey: string;
    /**
     * @description The authorization use status.
     */
    authorizationUseStatus: AuthorizationUseStatus | string;
    /**
     * @description The provisioning state of the authorization resource.
     */
    readonly provisioningState: ProvisioningState | string;
}
