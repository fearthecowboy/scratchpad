import { BastionShareableLink } from './BastionShareableLink';
/**
 * @description Post request for all the Bastion Shareable Link endpoints.
 */
export interface BastionShareableLinkListRequest {
    /**
     * @description List of VM references.
     */
    vms: Array<BastionShareableLink>;
}
