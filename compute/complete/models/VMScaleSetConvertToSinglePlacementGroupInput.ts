/**
 * @since 2019-12-01
 */
export interface VMScaleSetConvertToSinglePlacementGroupInput {
    /**
     * @description Id of the placement group in which you want future virtual machine instances to be placed. To query placement group Id, please use Virtual Machine Scale Set VMs - Get API. If not provided, the platform will choose one with maximum number of virtual machine instances.
     */
    activePlacementGroupId: string;
}
