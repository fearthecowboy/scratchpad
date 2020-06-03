import { BootDiagnostics } from './BootDiagnostics';
/**
 * @description Specifies the boot diagnostic settings state. <br><br>Minimum api-version: 2015-06-15.
 */
export interface DiagnosticsProfile {
    /**
     * @description Boot Diagnostics is a debugging feature which allows you to view Console Output and Screenshot to diagnose VM status. <br><br> You can easily view the output of your console log. <br><br> Azure also enables you to see a screenshot of the VM from the hypervisor.
     */
    bootDiagnostics: BootDiagnostics;
}
