import { HTTPConfigurationMethod } from '../enums/HTTPConfigurationMethod';
import { HTTPHeader } from './HTTPHeader';
/**
 * @description Describes the HTTP configuration.
 */
export interface ConnectionMonitorHttpConfiguration {
    /**
     * @description The port to connect to.
     */
    port: int64;
    /**
     * @description The HTTP method to use.
     */
    method: HTTPConfigurationMethod | string;
    /**
     * @description The path component of the URI. For instance, "/dir1/dir2".
     */
    path: string;
    /**
     * @description The HTTP headers to transmit with the request.
     */
    requestHeaders: Array<HTTPHeader>;
    /**
     * @description HTTP status codes to consider successful. For instance, "2xx,301-304,418".
     */
    validStatusCodeRanges: Array<string>;
    /**
     * @description Value indicating whether HTTPS is preferred over HTTP in cases where the choice is not explicit.
     */
    preferHTTPS: boolean;
}
