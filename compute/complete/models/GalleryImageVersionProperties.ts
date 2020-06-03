import { GalleryImageVersionPublishingProfile } from './GalleryImageVersionPublishingProfile';
import { GalleryImageVersionStorageProfile } from './GalleryImageVersionStorageProfile';
import { ReplicationStatus } from './ReplicationStatus';

/**
 * @description Describes the properties of a gallery Image Version.
 * @since 2018-06-01
 */
export interface GalleryImageVersionProperties_orig {
    /**
     * @Optional  '2019-12-01' - made property required
     */
    publishingProfile: GalleryImageVersionPublishingProfile;
    /**
     * @description The provisioning state, which only appears in the response.
     */
    readonly provisioningState: "Creating" | "Updating" | "Failed" | "Succeeded" | "Deleting" | "Migrating";
    /**
     * @Readonly  '2019-12-01' - removed readonly
     * @Optional  '2019-12-01' - made property optional
     */
    storageProfile?: GalleryImageVersionStorageProfile;
    readonly replicationStatus: ReplicationStatus;
}

/// ===================================
///  Example of a model that has a property with a non-trivial change
/// ===================================



/**
 * @description Describes the properties of a gallery Image Version.
 * @since 2018-06-01
 */
export interface GalleryImageVersionPropertiesBase {
  /**
   * @Optional  '2019-12-01' - made property required
   */
  publishingProfile: GalleryImageVersionPublishingProfile;
  /**
   * @description The provisioning state, which only appears in the response.
   */
  readonly provisioningState: "Creating" | "Updating" | "Failed" | "Succeeded" | "Deleting" | "Migrating";
  
  readonly replicationStatus: ReplicationStatus;
}



/**
 * @description Describes the properties of a gallery Image Version.
 * @since 2018-06-01
 */
export interface GalleryImageVersionProperties1 extends GalleryImageVersionPropertiesBase  {
  readonly storageProfile: GalleryImageVersionStorageProfile;
}

/**
 * @description Describes the properties of a gallery Image Version.
 * @since 2019-12-01
 */
export interface GalleryImageVersionProperties2 extends GalleryImageVersionPropertiesBase  {     
    storageProfile?: GalleryImageVersionStorageProfile;
}

/**
 * @description Describes the properties of a gallery Image Version.
 * @since 2018-06-01
 * 
 * @notes -- this is the type that would be exported, and it means that the definition
 *           is dependent on the api version (ie, something changed that isn't type expansion)
 */
export type GalleryImageVersionProperties = Versioned<GalleryImageVersionProperties1, GalleryImageVersionProperties2>;






