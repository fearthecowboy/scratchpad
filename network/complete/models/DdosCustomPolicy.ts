import { DdosCustomPolicyPropertiesFormat } from './DdosCustomPolicyPropertiesFormat';
import { Resource } from './Resource';

/**
 * @description A DDoS custom policy in a resource group.
 * @since 2019-07-01
 */
export interface DdosCustomPolicy extends Resource {
    /**
     * @description Properties of the DDoS custom policy.
     */
    properties: DdosCustomPolicyPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
