import { TroubleshootingProperties } from './TroubleshootingProperties';
/**
 * @description Parameters that define the resource to troubleshoot.
 */
export interface TroubleshootingParameters {
    /**
     * @description The target resource to troubleshoot.
     */
    targetResourceId?: string;
    /**
     * @description Properties of the troubleshooting resource.
     */
    properties?: TroubleshootingProperties;
}
