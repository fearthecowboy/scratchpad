import { InstanceViewStatus } from './InstanceViewStatus';
/**
 * @description The instance view of a virtual machine boot diagnostics.
 */
export interface BootDiagnosticsInstanceView {
    /**
     * @description The console screenshot blob URI.
     */
    readonly consoleScreenshotBlobUri: string ;
    /**
     * @description The Linux serial console log blob Uri.
     */
    readonly serialConsoleLogBlobUri: string ;
    /**
     * @description The boot diagnostics status information for the VM. <br><br> NOTE: It will be set only if there are errors encountered in enabling boot diagnostics.
     */
    readonly status: InstanceViewStatus;
}
