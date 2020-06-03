
/**
 * @description Response after calling a manual recovery walk
 */
export interface RecoveryWalkResponse {
    /**
     * @description Whether the recovery walk was performed
     */
    readonly walkPerformed: boolean ;
    /**
     * @description The next update domain that needs to be walked. Null means walk spanning all update domains has been completed
     */
    readonly nextPlatformUpdateDomain: int64;
}
