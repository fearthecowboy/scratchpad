import { BastionShareableLink } from './BastionShareableLink';

/**
 * @description Post request for all the Bastion Shareable Link endpoints.
 * @since 2019-12-01
 */
export interface BastionShareableLinkListRequest {
    /**
     * @description List of VM references.
     */
    vms: Array<BastionShareableLink>;
}
