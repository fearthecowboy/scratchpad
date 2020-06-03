import { PacketCaptureFilter } from './PacketCaptureFilter';
import { PacketCaptureStorageLocation } from './PacketCaptureStorageLocation';

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
    storageLocation?: PacketCaptureStorageLocation;
    filters: Array<PacketCaptureFilter>;
}
