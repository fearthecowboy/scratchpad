import { ApplicationGateway } from './ApplicationGateway';
/**
 * @description Response for ListApplicationGateways API service call.
 */
export interface ApplicationGatewayListResult {
    /**
     * @description List of an application gateways in a resource group.
     */
    value: Array<ApplicationGateway>;
    /**
     * @description URL to get the next set of results.
     */
    nextLink: string;
}
