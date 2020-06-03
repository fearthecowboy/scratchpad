
/**
 * @description Description of operation properties format.
 * @since 2017-11-01
 */
export interface OperationPropertiesFormat {
    /**
     * @description Specification of the service.
     */
    serviceSpecification: {
        /**
         * @description Operation service specification.
         */
        metricSpecifications: Array<MetricSpecification>;
        /**
         * @description Operation log specification.
         */
        logSpecifications: Array<LogSpecification>;
    };
}
