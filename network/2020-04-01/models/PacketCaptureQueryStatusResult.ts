import { PcStatus } from '../enums/PcStatus';
import { PcError } from '../enums/PcError';
/**
 * @description Status of packet capture session.
 */
export interface PacketCaptureQueryStatusResult {
    /**
     * @description The name of the packet capture resource.
     */
    name: string;
    /**
     * @description The ID of the packet capture resource.
     */
    id: string;
    /**
     * @description The start time of the packet capture session.
     */
    captureStartTime: dateTime;
    /**
     * @description The status of the packet capture session.
     */
    packetCaptureStatus: PcStatus | string;
    /**
     * @description The reason the current packet capture session was stopped.
     */
    stopReason: string;
    /**
     * @description List of errors of packet capture session.
     */
    packetCaptureError: Array<PcError | string>;
}
