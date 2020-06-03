import { ApplicationGatewayCustomErrorStatusCode } from '../enums/ApplicationGatewayCustomErrorStatusCode';

/**
 * @description Customer error of an application gateway.
 * @since 2019-07-01
 */
export interface ApplicationGatewayCustomError {
    /**
     * @description Status code of the application gateway customer error.
     */
    statusCode: ApplicationGatewayCustomErrorStatusCode | string;
    /**
     * @description Error page URL of the application gateway customer error.
     */
    customErrorPageUrl: string;
}
