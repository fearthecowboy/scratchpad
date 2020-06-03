import { PacketCaptureResult } from './PacketCaptureResult';
/**
 * @description List of packet capture sessions.
 */
export interface PacketCaptureListResult {
    /**
     * @description Information about packet capture sessions.
     */
    value: Array<PacketCaptureResult>;
}
