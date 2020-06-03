
/**
 * @description The storage location for a packet capture session.
 */
export interface PacketCaptureStorageLocation {
    /**
     * @description The ID of the storage account to save the packet capture session. Required if no local file path is provided.
     */
    storageId: string;
    /**
     * @description The URI of the storage path to save the packet capture. Must be a well-formed URI describing the location to save the packet capture.
     */
    storagePath: string;
    /**
     * @description A valid local path on the targeting VM. Must include the name of the capture file (*.cap). For linux virtual machine it must start with /var/captures. Required if no storage ID is provided, otherwise optional.
     */
    filePath: string;
}
