import { SubResource } from './SubResource';
import { ApplicationGatewayPathRule } from './ApplicationGatewayPathRule';
/**
 * @description Properties of UrlPathMap of the application gateway.
 */
export interface ApplicationGatewayUrlPathMapPropertiesFormat {
    /**
     * @description Default backend address pool resource of URL path map.
     */
    defaultBackendAddressPool: SubResource;
    /**
     * @description Default backend http settings resource of URL path map.
     */
    defaultBackendHttpSettings: SubResource;
    /**
     * @description Path rule of URL path map resource.
     */
    pathRules: Array<ApplicationGatewayPathRule>;
    /**
     * @description Provisioning state of the backend http settings resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState: string;
}
