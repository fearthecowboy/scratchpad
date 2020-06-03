import { SecurityRulePropertiesFormat } from './SecurityRulePropertiesFormat';
import { SubResource } from './SubResource';

/**
 * @description Network security rule.
 */
export interface SecurityRule extends SubResource {
    properties: SecurityRulePropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly etag: string;
}
