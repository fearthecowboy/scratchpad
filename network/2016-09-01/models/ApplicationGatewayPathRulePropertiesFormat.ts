import { SubResource } from './SubResource';
/**
 * @description Properties of probe of an application gateway.
 */
export interface ApplicationGatewayPathRulePropertiesFormat {
    /**
     * @description Path rules of URL path map.
     */
    paths: Array<string>;
    /**
     * @description Backend address pool resource of URL path map.
     */
    backendAddressPool: SubResource;
    /**
     * @description Backend http settings resource of URL path map.
     */
    backendHttpSettings: SubResource;
    /**
     * @description Path rule of URL path map resource. Possible values are: 'Updating', 'Deleting', and 'Failed'.
     */
    provisioningState: string;
}
