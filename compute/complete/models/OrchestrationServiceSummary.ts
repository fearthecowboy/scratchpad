import { OrchestrationServiceNames } from '../enums/OrchestrationServiceNames';
import { OrchestrationServiceState } from '../enums/OrchestrationServiceState';
/**
 * @description Summary for an orchestration service of a virtual machine scale set.
 * @since 2019-12-01
 */
export interface OrchestrationServiceSummary {
    /**
     * @description The name of the service.
     */
    readonly serviceName: OrchestrationServiceNames | string;
    /**
     * @description The current state of the service.
     */
    readonly serviceState: OrchestrationServiceState | string;
}
