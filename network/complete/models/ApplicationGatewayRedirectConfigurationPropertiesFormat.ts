import { ApplicationGatewayRedirectType } from '../enums/ApplicationGatewayRedirectType';
import { SubResource } from './SubResource';

/**
 * @description Properties of redirect configuration of the application gateway.
 * @since 2017-11-01
 */
export interface ApplicationGatewayRedirectConfigurationPropertiesFormat {
    /**
     * @description Supported http redirection types - Permanent, Temporary, Found, SeeOther.
     */
    redirectType: ApplicationGatewayRedirectType | string;
    /**
     * @description Reference to a listener to redirect the request to.
     */
    targetListener: SubResource;
    /**
     * @description Url to redirect the request to.
     */
    targetUrl: string;
    /**
     * @description Include path in the redirected url.
     */
    includePath: boolean;
    /**
     * @description Include query string in the redirected url.
     */
    includeQueryString: boolean;
    /**
     * @description Request routing specifying redirect configuration.
     */
    requestRoutingRules: Array<SubResource>;
    /**
     * @description Url path maps specifying default redirect configuration.
     */
    urlPathMaps: Array<SubResource>;
    /**
     * @description Path rules specifying redirect configuration.
     */
    pathRules: Array<SubResource>;
}
