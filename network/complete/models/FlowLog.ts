import { FlowLogPropertiesFormat } from './FlowLogPropertiesFormat';
import { Resource } from './Resource';

/**
 * @description A flow log resource.
 * @since 2019-12-01
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
