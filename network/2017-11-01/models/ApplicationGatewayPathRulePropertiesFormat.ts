import { SubResource } from './SubResource';
/**
 * @description Properties of path rule of an application gateway.
 */
export interface ApplicationGatewayPathRulePropertiesFormat {
    /**
     * @description Path rules of URL path map.
     */
    paths: Array<string>;
    /**
     * @description Backend address pool resource of URL path map path rule.
     */
    backendAddressPool: SubResource;
    /**
     * @description Backend http settings resource of URL path map path rule.
     */
    backendHttpSettings: SubResource;
    /**
     * @description Redirect configuration resource of URL path map path rule.
     */
    redirectConfiguration: SubResource;
    /**
     * @description Path rule of URL path map resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState: string;
}
