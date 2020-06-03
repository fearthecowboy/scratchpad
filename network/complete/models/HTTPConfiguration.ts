import { HTTPMethod } from '../enums/HTTPMethod';
import { HTTPHeader } from './HTTPHeader';

/**
 * @description HTTP configuration of the connectivity check.
 * @since 2019-07-01
 */
export interface HTTPConfiguration {
    /**
     * @description HTTP method.
     */
    method: HTTPMethod | string;
    /**
     * @description List of HTTP headers.
     */
    headers: Array<HTTPHeader>;
    /**
     * @description Valid status codes.
     */
    validStatusCodes: Array<int64>;
}
