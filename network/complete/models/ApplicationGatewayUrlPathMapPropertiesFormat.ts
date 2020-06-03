import { ProvisioningState } from "../enums/ProvisioningState";
import { ApplicationGatewayPathRule } from './ApplicationGatewayPathRule';
import { SubResource } from './SubResource';

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
     * @StringToEnum  '2019-07-01' - type changed from 'string' to 'ProvisioningState | string'
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
    /** @description Default redirect configuration resource of URL path map.
     * @since 2017-11-01
     */
    defaultRedirectConfiguration: SubResource;
    /** @description Default Rewrite rule set resource of URL path map.
     * @since 2019-07-01
     */
    defaultRewriteRuleSet: SubResource;
}
