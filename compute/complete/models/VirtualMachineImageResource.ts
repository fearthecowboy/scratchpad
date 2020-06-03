import { SubResource } from './SubResource';

/**
 * @description Virtual machine image resource information.
 */
export interface VirtualMachineImageResource extends SubResource {
    /**
     * @description The name of the resource.
     */
    name?: string;
    /**
     * @description The supported Azure location of the resource.
     */
    location?: string;
    /**
     * @description Specifies the tags that are assigned to the virtual machine. For more information about using tags, see [Using tags to organize your Azure resources](https://docs.microsoft.com/azure/azure-resource-manager/resource-group-using-tags.md).
     */
    tags: Dictionary<string>;
}
