import { SubResource } from './SubResource';
/**
 * @description Output of virtual machine capture operation.
 */
export interface VirtualMachineCaptureResult extends SubResource {
    /**
     * @description the schema of the captured virtual machine
     */
    readonly '$schema': string ;
    /**
     * @description the version of the content
     */
    readonly contentVersion: string ;
    /**
     * @description parameters of the captured virtual machine
     */
    readonly parameters: {};
    /**
     * @description a list of resource items of the captured virtual machine
     */
    readonly resources: Array<{}>;
}
