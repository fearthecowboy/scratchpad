import { HTTPConfiguration } from './HTTPConfiguration';

/**
 * @description Configuration of the protocol.
 * @since 2019-07-01
 */
export interface ProtocolConfiguration {
    /**
     * @description HTTP configuration of the connectivity check.
     */
    HTTPConfiguration: HTTPConfiguration;
}
