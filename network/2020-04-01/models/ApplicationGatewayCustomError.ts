import { ApplicationGatewayCustomErrorStatusCode } from '../enums/ApplicationGatewayCustomErrorStatusCode';
/**
 * @description Customer error of an application gateway.
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
