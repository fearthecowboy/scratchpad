import { Resource } from './Resource';
import { DdosCustomPolicyPropertiesFormat } from './DdosCustomPolicyPropertiesFormat';
/**
 * @description A DDoS custom policy in a resource group.
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
