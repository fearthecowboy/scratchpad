
/**
 * @description Describes the target region information.
 */
export interface TargetRegion {
    /**
     * @description The name of the region.
     */
    name?: string;
    /**
     * @description The number of replicas of the Image Version to be created per region. This property is updatable.
     */
    regionalReplicaCount: int32;
}
