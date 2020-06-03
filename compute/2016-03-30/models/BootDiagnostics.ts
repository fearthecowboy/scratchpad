
/**
 * @description Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. <br><br> You can easily view the output of your console log. <br><br> Azure also enables you to see a screenshot of the VM from the hypervisor.
 */
export interface BootDiagnostics {
    /**
     * @description Whether boot diagnostics should be enabled on the Virtual Machine.
     */
    enabled: boolean;
    /**
     * @description Uri of the storage account to use for placing the console output and screenshot.
     */
    storageUri: string;
}
