import { UsageUnit } from '../enums/UsageUnit';
import { UsageName } from './UsageName';
/**
 * @description Describes Compute Resource Usage.
 */
export interface Usage {
    /**
     * @description An enum describing the unit of usage measurement.
     */
    unit?: UsageUnit;
    /**
     * @description The current usage of the resource.
     */
    currentValue?: int32;
    /**
     * @description The maximum permitted usage of the resource.
     */
    limit?: int64;
    /**
     * @description The name of the type of usage.
     */
    name?: UsageName;
}
