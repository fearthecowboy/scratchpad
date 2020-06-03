import { BastionShareableLink } from './BastionShareableLink';

/**
 * @description Response for all the Bastion Shareable Link endpoints.
 * @since 2019-12-01
 */
export interface BastionShareableLinkListResult {
    /**
     * @description List of Bastion Shareable Links for the request.
     */
    value: Array<BastionShareableLink>;
    /**
     * @description The URL to get the next set of results.
     */
    nextLink: string;
}
