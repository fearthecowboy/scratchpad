
/**
 * @extensible
 * @description Network protocol this rule applies to.
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
    Icmp = 'Icmp',
    /**
     *
     */
    Esp = 'Esp',
    /**
     *
     */
    '*' = '*'
}
