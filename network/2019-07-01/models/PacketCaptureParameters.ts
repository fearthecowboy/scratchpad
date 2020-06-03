import { PacketCaptureStorageLocation } from './PacketCaptureStorageLocation';
import { PacketCaptureFilter } from './PacketCaptureFilter';
/**
 * @description Parameters that define the create packet capture operation.
 */
export interface PacketCaptureParameters {
    /**
     * @description The ID of the targeted resource, only VM is currently supported.
     */
    target?: string;
    /**
     * @description Number of bytes captured per packet, the remaining bytes are truncated.
     */
    bytesToCapturePerPacket: int64;
    /**
     * @description Maximum size of the capture output.
     */
    totalBytesPerSession: int64;
    /**
     * @description Maximum duration of the capture session in seconds.
     */
    timeLimitInSeconds: int64;
    /**
     * @description Describes the storage location for a packet capture session.
     */
    storageLocation?: PacketCaptureStorageLocation;
    /**
     * @description A list of packet capture filters.
     */
    filters: Array<PacketCaptureFilter>;
}
