import { Availability } from './Availability';
import { Dimension } from './Dimension';

/**
 * @description Description of metrics specification.
 * @since 2017-11-01
 */
export interface MetricSpecification {
    /**
     * @description The name of the metric.
     */
    name: string;
    /**
     * @description The display name of the metric.
     */
    displayName: string;
    /**
     * @description The description of the metric.
     */
    displayDescription: string;
    /**
     * @description Units the metric to be displayed in.
     */
    unit: string;
    /**
     * @description The aggregation type.
     */
    aggregationType: string;
    /**
     * @description List of availability.
     */
    availabilities: Array<Availability>;
    /**
     * @description Whether regional MDM account enabled.
     */
    enableRegionalMdmAccount: boolean;
    /**
     * @description Whether gaps would be filled with zeros.
     */
    fillGapWithZero: boolean;
    /**
     * @description Pattern for the filter of the metric.
     */
    metricFilterPattern: string;
    /**
     * @description List of dimensions.
     */
    dimensions: Array<Dimension>;
    /**
     * @description Whether the metric is internal.
     */
    isInternal: boolean;
    /**
     * @description The source MDM account.
     */
    sourceMdmAccount: string;
    /**
     * @description The source MDM namespace.
     */
    sourceMdmNamespace: string;
    /**
     * @description The resource Id dimension name override.
     */
    resourceIdDimensionNameOverride: string;
}
