
/**
 * @extensible
 * @description The load distribution policy for this rule. Possible values are 'Default', 'SourceIP', and 'SourceIPProtocol'.
 */
export enum LoadDistribution {
    /**
     *
     */
    Default = 'Default',
    /**
     *
     */
    SourceIP = 'SourceIP',
    /**
     *
     */
    SourceIPProtocol = 'SourceIPProtocol'
}
