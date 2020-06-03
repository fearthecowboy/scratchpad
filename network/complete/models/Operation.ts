import { OperationPropertiesFormat } from './OperationPropertiesFormat';

/**
 * @description Network REST API operation definition.
 * @since 2017-11-01
 */
export interface Operation {
    /**
     * @description Operation name: {provider}/{resource}/{operation}
     */
    name: string;
    /**
     * @description Display metadata associated with the operation.
     */
    display: {
        /**
         * @description Service provider: Microsoft Network.
         */
        provider: string;
        /**
         * @description Resource on which the operation is performed.
         */
        resource: string;
        /**
         * @description Type of the operation: get, read, delete, etc.
         */
        operation: string;
        /**
         * @description Description of the operation.
         */
        description: string;
    };
    /**
     * @description Origin of the operation.
     */
    origin: string;
    /**
     * @description Operation properties format.
     */
    properties: OperationPropertiesFormat;
}
