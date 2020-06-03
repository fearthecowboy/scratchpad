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
    /**
     * @description A unique read-only string that changes whenever the resource is updated.
     */
    readonly etag: string ;
    /**
     * @description Properties of the packet capture result.
     */
    properties: PacketCaptureResultProperties;
}
