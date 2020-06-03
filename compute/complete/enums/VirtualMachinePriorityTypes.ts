
/**
 * @extensible
 * @description Specifies the priority for the virtual machines in the scale set. <br><br>Minimum api-version: 2017-10-30-preview
 * @since 2018-06-01
 */
export enum VirtualMachinePriorityTypes {
    /**
     *
     */
    Regular = 'Regular',
    /**
     *
     */
    Low = 'Low',
    /**
     * @since 2019-12-01
     */
    Spot = "Spot"
}
