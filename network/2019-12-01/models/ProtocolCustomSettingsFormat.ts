import { DdosCustomPolicyProtocol } from '../enums/DdosCustomPolicyProtocol';
import { DdosCustomPolicyTriggerSensitivityOverride } from '../enums/DdosCustomPolicyTriggerSensitivityOverride';
/**
 * @description DDoS custom policy properties.
 */
export interface ProtocolCustomSettingsFormat {
    /**
     * @description The protocol for which the DDoS protection policy is being customized.
     */
    protocol: DdosCustomPolicyProtocol | string;
    /**
     * @description The customized DDoS protection trigger rate.
     */
    triggerRateOverride: string ;
    /**
     * @description The customized DDoS protection source rate.
     */
    sourceRateOverride: string ;
    /**
     * @description The customized DDoS protection trigger rate sensitivity degrees. High: Trigger rate set with most sensitivity w.r.t. normal traffic. Default: Trigger rate set with moderate sensitivity w.r.t. normal traffic. Low: Trigger rate set with less sensitivity w.r.t. normal traffic. Relaxed: Trigger rate set with least sensitivity w.r.t. normal traffic.
     */
    triggerSensitivityOverride: DdosCustomPolicyTriggerSensitivityOverride | string;
}
