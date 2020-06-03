import { VM } from './VM';
/**
 * @description Bastion Shareable Link.
 */
export interface BastionShareableLink {
    /**
     * @description Reference of the virtual machine resource.
     */
    vm?: VM;
    /**
     * @description The unique Bastion Shareable Link to the virtual machine.
     */
    readonly bsl: string ;
    /**
     * @description The time when the link was created.
     */
    readonly createdAt: string ;
    /**
     * @description Optional field indicating the warning or error message related to the vm in case of partial failure.
     */
    readonly message: string ;
}
