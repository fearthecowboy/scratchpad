import { InstanceViewStatus } from "./InstanceViewStatus";
import { OperationStatusResponse } from './OperationStatusResponse';
import { RunCommandResultProperties } from './RunCommandResultProperties';

/**
 * @description Run command operation response.
 * @since 2017-03-30
 */
export interface RunCommandResult extends OperationStatusResponse {
    /**
     * @deleted 2018-06-01
     */
    properties: RunCommandResultProperties;
    /** @description Run command operation response.
     * @since 2018-06-01
     */
    value: Array<InstanceViewStatus>;
}
