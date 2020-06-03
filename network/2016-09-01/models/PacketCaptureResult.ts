import { PacketCaptureResultProperties } from './PacketCaptureResultProperties';
/**
 * @description Information about packet capture session.
 */
export interface PacketCaptureResult {
    /**
     * @description Name of the packet capture session.
     */
    readonly name: string ;
    /**
     * @description ID of the packet capture operation.
     */
    readonly id: string ;
    etag: string;
    properties: PacketCaptureResultProperties;
}
