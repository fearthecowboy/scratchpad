import { ApiError } from './ApiError';

/**
 * @description Information about rollback on failed VM instances after a OS Upgrade operation.
 * @since 2018-06-01
 */
export interface RollbackStatusInfo {
    /**
     * @description The number of instances which have been successfully rolled back.
     */
    readonly successfullyRolledbackInstanceCount: int32;
    /**
     * @description The number of instances which failed to rollback.
     */
    readonly failedRolledbackInstanceCount: int32;
    /**
     * @description Error details if OS rollback failed.
     */
    readonly rollbackError: ApiError;
}
