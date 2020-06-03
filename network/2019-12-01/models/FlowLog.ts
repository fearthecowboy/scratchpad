import { Resource } from './Resource';
import { FlowLogPropertiesFormat } from './FlowLogPropertiesFormat';
/**
 * @description A flow log resource.
 */
export interface FlowLog extends Resource {
    /**
     * @description Properties of the flow log.
     */
    properties: FlowLogPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
