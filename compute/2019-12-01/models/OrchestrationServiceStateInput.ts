import { OrchestrationServiceNames } from '../enums/OrchestrationServiceNames';
import { OrchestrationServiceStateAction } from '../enums/OrchestrationServiceStateAction';
/**
 * @description The input for OrchestrationServiceState
 */
export interface OrchestrationServiceStateInput {
    /**
     * @description The name of the service.
     */
    serviceName?: OrchestrationServiceNames | string;
    /**
     * @description The action to be performed.
     */
    action?: OrchestrationServiceStateAction | string;
}
