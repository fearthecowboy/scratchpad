import { DdosProtectionPlanPropertiesFormat } from './DdosProtectionPlanPropertiesFormat';
/**
 * @description A DDoS protection plan in a resource group.
 */
export interface DdosProtectionPlan {
    /**
     * @description Resource ID.
     */
    readonly id: string ;
    /**
     * @description Resource name.
     */
    readonly name: string ;
    /**
     * @description Resource type.
     */
    readonly type: string ;
    /**
     * @description Resource location.
     */
    location: string;
    /**
     * @description Resource tags.
     */
    tags: Dictionary<string>;
    /**
     * @description Properties of the DDoS protection plan.
     */
    properties: DdosProtectionPlanPropertiesFormat;
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
}
