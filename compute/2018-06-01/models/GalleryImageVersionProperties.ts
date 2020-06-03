import { GalleryImageVersionPublishingProfile } from './GalleryImageVersionPublishingProfile';
import { GalleryImageVersionStorageProfile } from './GalleryImageVersionStorageProfile';
import { ReplicationStatus } from './ReplicationStatus';
/**
 * @description Describes the properties of a gallery Image Version.
 */
export interface GalleryImageVersionProperties {
    publishingProfile?: GalleryImageVersionPublishingProfile;
    /**
     * @description The provisioning state, which only appears in the response.
     */
    readonly provisioningState: "Creating" | "Updating" | "Failed" | "Succeeded" | "Deleting" | "Migrating";
    readonly storageProfile: GalleryImageVersionStorageProfile;
    readonly replicationStatus: ReplicationStatus;
}
