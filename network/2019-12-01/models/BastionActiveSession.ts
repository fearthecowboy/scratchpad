import { BastionConnectProtocol } from '../enums/BastionConnectProtocol';
/**
 * @description The session detail for a target.
 */
export interface BastionActiveSession {
    /**
     * @description A unique id for the session.
     */
    readonly sessionId: string ;
    /**
     * @description The time when the session started.
     */
    readonly startTime: {};
    /**
     * @description The subscription id for the target virtual machine.
     */
    readonly targetSubscriptionId: string ;
    /**
     * @description The type of the resource.
     */
    readonly resourceType: string ;
    /**
     * @description The host name of the target.
     */
    readonly targetHostName: string ;
    /**
     * @description The resource group of the target.
     */
    readonly targetResourceGroup: string ;
    /**
     * @description The user name who is active on this session.
     */
    readonly userName: string ;
    /**
     * @description The IP Address of the target.
     */
    readonly targetIpAddress: string ;
    /**
     * @description The protocol used to connect to the target.
     */
    readonly protocol: BastionConnectProtocol | string;
    /**
     * @description The resource id of the target.
     */
    readonly targetResourceId: string ;
    /**
     * @description Duration in mins the session has been active.
     */
    readonly sessionDurationInMins: double;
}
