import { GalleryApplicationVersionPublishingProfile } from './GalleryApplicationVersionPublishingProfile';
import { ReplicationStatus } from './ReplicationStatus';
/**
 * @description Describes the properties of a gallery Image Version.
 * @since 2019-12-01
 */
export interface GalleryApplicationVersionProperties {
    publishingProfile?: GalleryApplicationVersionPublishingProfile;
    /**
     * @description The provisioning state, which only appears in the response.
     */
    readonly provisioningState: "Creating" | "Updating" | "Failed" | "Succeeded" | "Deleting" | "Migrating";
    readonly replicationStatus: ReplicationStatus;
}
