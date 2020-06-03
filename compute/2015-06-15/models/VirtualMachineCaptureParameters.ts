
/**
 * @description Capture Virtual Machine parameters.
 */
export interface VirtualMachineCaptureParameters {
    /**
     * @description The captured virtual hard disk's name prefix.
     */
    vhdPrefix?: string;
    /**
     * @description The destination container name.
     */
    destinationContainerName?: string;
    /**
     * @description Specifies whether to overwrite the destination virtual hard disk, in case of conflict.
     */
    overwriteVhds?: boolean;
}
