import { SubResource } from './SubResource';
import { VirtualMachineCaptureResultProperties } from './VirtualMachineCaptureResultProperties';

/**
 * @description Resource Id.
 */
export interface VirtualMachineCaptureResult extends SubResource {
    /**
     * @deleted 2018-06-01
     */
    properties: VirtualMachineCaptureResultProperties;
    /** @description the schema of the captured virtual machine
     * @since 2018-06-01
     */
    readonly '$schema': string;
    /** @description the version of the content
     * @since 2018-06-01
     */
    readonly contentVersion: string;
    /** @description parameters of the captured virtual machine
     * @since 2018-06-01
     */
    readonly parameters: {};
    /** @description a list of resource items of the captured virtual machine
     * @since 2018-06-01
     */
    readonly resources: Array<{}>;
}
