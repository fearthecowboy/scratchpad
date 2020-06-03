
/**
 * @extensible
 * @description The type of issue.
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
