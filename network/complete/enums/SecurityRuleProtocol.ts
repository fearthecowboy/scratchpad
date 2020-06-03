
/**
 * @extensible
 * @description Network protocol this rule applies to. Possible values are 'Tcp', 'Udp', and '*'.
 * @todo temporary-reuse-marker
 */
export enum SecurityRuleProtocol {
    /**
     *
     */
    Tcp = 'Tcp',
    /**
     *
     */
    Udp = 'Udp',
    /**
     *
     */
    '*' = '*',
    /**
     * @since 2019-07-01
     */
    Icmp = "Icmp",
    /**
     * @since 2019-07-01
     */
    Esp = "Esp",
    /**
     * @since 2019-12-01
     */
    Ah = "Ah"
}
