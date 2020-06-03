import { ProvisioningState } from '../enums/ProvisioningState';
import { PacketCaptureParameters } from './PacketCaptureParameters';

/**
 * @description Describes the properties of a packet capture session.
 */
export interface PacketCaptureResultProperties extends PacketCaptureParameters {
    /**
     * @description The provisioning state of the packet capture session.
     * @Readonly  '2019-12-01' - added readonly
     */
    readonly provisioningState: ProvisioningState | string;
}
