import { HTTPConfiguration } from './HTTPConfiguration';
/**
 * @description Configuration of the protocol.
 */
export interface ProtocolConfiguration {
    /**
     * @description HTTP configuration of the connectivity check.
     */
    HTTPConfiguration: HTTPConfiguration;
}
