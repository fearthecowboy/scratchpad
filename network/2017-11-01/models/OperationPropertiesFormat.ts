
/**
 * @description Description of operation properties format.
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
