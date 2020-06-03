import { RouteFilterRulePropertiesFormat } from './RouteFilterRulePropertiesFormat';
import { SubResource } from './SubResource';

/**
 * @description Route Filter Rule Resource
 * @since 2017-11-01
 */
export interface RouteFilterRule extends SubResource {
    properties: RouteFilterRulePropertiesFormat;
    /**
     * @description The name of the resource that is unique within a resource group. This name can be used to access the resource.
     */
    name: string;
    /**
     * @description Resource location.
     */
    location: string;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
