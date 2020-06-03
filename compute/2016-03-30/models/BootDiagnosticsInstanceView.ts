
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
}
