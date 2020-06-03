
/**
 * @extensible
 * @description The customized DDoS protection trigger rate sensitivity degrees. High: Trigger rate set with most sensitivity w.r.t. normal traffic. Default: Trigger rate set with moderate sensitivity w.r.t. normal traffic. Low: Trigger rate set with less sensitivity w.r.t. normal traffic. Relaxed: Trigger rate set with least sensitivity w.r.t. normal traffic.
 * @since 2019-07-01
 */
export enum DdosCustomPolicyTriggerSensitivityOverride {
    /**
     *
     */
    Relaxed = 'Relaxed',
    /**
     *
     */
    Low = 'Low',
    /**
     *
     */
    Default = 'Default',
    /**
     *
     */
    High = 'High'
}
