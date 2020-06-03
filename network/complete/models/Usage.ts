import { UsageUnit } from '../enums/UsageUnit';
import { UsageName } from './UsageName';

/**
 * @description Describes network resource usage.
 */
export interface Usage {
    /**
     * @description An enum describing the unit of measurement.
     */
    unit?: UsageUnit | string;
    /**
     * @description The current value of the usage.
     */
    currentValue?: int64;
    /**
     * @description The limit of usage.
     */
    limit?: int64;
    /**
     * @description The name of the type of usage.
     */
    name?: UsageName;
    /** @description Resource identifier.
     * @since 2017-11-01
     */
    readonly id: string;
}
