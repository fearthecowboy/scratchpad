import { OperationStatusResponse } from './OperationStatusResponse';
import { RunCommandResultProperties } from './RunCommandResultProperties';
/**
 * @description Run command operation response.
 */
export interface RunCommandResult extends OperationStatusResponse {
    properties: RunCommandResultProperties;
}
