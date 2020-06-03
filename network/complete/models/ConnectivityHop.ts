import { ConnectivityIssue } from './ConnectivityIssue';

/**
 * @description Information about a hop between the source and the destination.
 * @since 2017-11-01
 */
export interface ConnectivityHop {
    /**
     * @description The type of the hop.
     */
    readonly type: string ;
    /**
     * @description The ID of the hop.
     */
    readonly id: string ;
    /**
     * @description The IP address of the hop.
     */
    readonly address: string ;
    /**
     * @description The ID of the resource corresponding to this hop.
     */
    readonly resourceId: string ;
    /**
     * @description List of next hop identifiers.
     */
    readonly nextHopIds: Array<string>;
    /**
     * @description List of issues.
     */
    readonly issues: Array<ConnectivityIssue>;
}
