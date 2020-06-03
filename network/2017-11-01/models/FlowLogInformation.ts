import { FlowLogProperties } from './FlowLogProperties';
/**
 * @description Information on the configuration of flow log.
 */
export interface FlowLogInformation {
    /**
     * @description The ID of the resource to configure for flow logging.
     */
    targetResourceId?: string;
    properties?: FlowLogProperties;
}
