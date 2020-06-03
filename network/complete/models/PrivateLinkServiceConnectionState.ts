
/**
 * @description A collection of information about the state of the connection between service consumer and provider.
 * @since 2019-07-01
 */
export interface PrivateLinkServiceConnectionState {
    /**
     * @description Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
     */
    status: string;
    /**
     * @description The reason for approval/rejection of the connection.
     */
    description: string;
    /**
     * @description A message indicating if changes on the service provider require any updates on the consumer.
     */
    actionsRequired: string;
}
