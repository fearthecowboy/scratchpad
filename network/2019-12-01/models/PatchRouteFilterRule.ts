import { SubResource } from './SubResource';
import { RouteFilterRulePropertiesFormat } from './RouteFilterRulePropertiesFormat';
/**
 * @description Route Filter Rule Resource.
 */
export interface PatchRouteFilterRule extends SubResource {
    /**
     * @description Properties of the route filter rule.
     */
    properties: RouteFilterRulePropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    readonly name: string ;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
