
/**
 * @extensible
 * @description The type of issue.
 * @since 2017-11-01
 */
export enum IssueType {
    /**
     *
     */
    Unknown = 'Unknown',
    /**
     *
     */
    AgentStopped = 'AgentStopped',
    /**
     *
     */
    GuestFirewall = 'GuestFirewall',
    /**
     *
     */
    DnsResolution = 'DnsResolution',
    /**
     *
     */
    SocketBind = 'SocketBind',
    /**
     *
     */
    NetworkSecurityRule = 'NetworkSecurityRule',
    /**
     *
     */
    UserDefinedRoute = 'UserDefinedRoute',
    /**
     *
     */
    PortThrottled = 'PortThrottled',
    /**
     *
     */
    Platform = 'Platform'
}
