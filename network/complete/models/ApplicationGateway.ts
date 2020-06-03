import { ApplicationGatewayPropertiesFormat } from './ApplicationGatewayPropertiesFormat';
import { ManagedServiceIdentity } from "./ManagedServiceIdentity";
import { Resource } from './Resource';

/**
 * @description Application gateway resource
 */
export interface ApplicationGateway extends Resource {
    properties: ApplicationGatewayPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
    /** @description A list of availability zones denoting where the resource needs to come from.
     * @since 2019-07-01
     */
    zones: Array<string>;
    /** @description The identity of the application gateway, if configured.
     * @since 2019-07-01
     */
    identity: ManagedServiceIdentity;
}
