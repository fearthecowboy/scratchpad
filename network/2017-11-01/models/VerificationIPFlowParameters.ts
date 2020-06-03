import { Direction } from '../enums/Direction';
import { Protocol } from '../enums/Protocol';
/**
 * @description Parameters that define the IP flow to be verified.
 */
export interface VerificationIPFlowParameters {
    /**
     * @description The ID of the target resource to perform next-hop on.
     */
    targetResourceId?: string;
    /**
     * @description The direction of the packet represented as a 5-tuple.
     */
    direction?: Direction | string;
    /**
     * @description Protocol to be verified on.
     */
    protocol?: Protocol | string;
    /**
     * @description The local port. Acceptable values are a single integer in the range (0-65535). Support for * for the source port, which depends on the direction.
     */
    localPort?: string;
    /**
     * @description The remote port. Acceptable values are a single integer in the range (0-65535). Support for * for the source port, which depends on the direction.
     */
    remotePort?: string;
    /**
     * @description The local IP address. Acceptable values are valid IPv4 addresses.
     */
    localIPAddress?: string;
    /**
     * @description The remote IP address. Acceptable values are valid IPv4 addresses.
     */
    remoteIPAddress?: string;
    /**
     * @description The NIC ID. (If VM has multiple NICs and IP forwarding is enabled on any of them, then this parameter must be specified. Otherwise optional).
     */
    targetNicResourceId: string;
}
