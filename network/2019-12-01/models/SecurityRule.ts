import { SubResource } from './SubResource';
import { SecurityRulePropertiesFormat } from './SecurityRulePropertiesFormat';
/**
 * @description Network security rule.
 */
export interface SecurityRule extends SubResource {
    /**
     * @description Properties of the security rule.
     */
    properties: SecurityRulePropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
