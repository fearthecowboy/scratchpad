
/**
 * @description Storage location provided for troubleshoot.
 */
export interface TroubleshootingProperties {
    /**
     * @description The ID for the storage account to save the troubleshoot result.
     */
    storageId?: string;
    /**
     * @description The path to the blob to save the troubleshoot result in.
     */
    storagePath?: string;
}
