import { Resource } from './Resource';
import { ApplicationGatewayPropertiesFormat } from './ApplicationGatewayPropertiesFormat';
/**
 * @description Application gateway resource
 */
export interface ApplicationGateway extends Resource {
    properties: ApplicationGatewayPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    etag: string;
}
