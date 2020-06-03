import { Resource } from './Resource';
import { ApplicationGatewayPropertiesFormat } from './ApplicationGatewayPropertiesFormat';
import { ManagedServiceIdentity } from './ManagedServiceIdentity';
/**
 * @description Application gateway resource.
 */
export interface ApplicationGateway extends Resource {
    /**
     * @description Properties of the application gateway.
     */
    properties: ApplicationGatewayPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
    /**
     * @description A list of availability zones denoting where the resource needs to come from.
     */
    zones: Array<string>;
    /**
     * @description The identity of the application gateway, if configured.
     */
    identity: ManagedServiceIdentity;
}
