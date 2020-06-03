import { NextHopType } from '../enums/NextHopType';
/**
 * @description The information about next hop from the specified VM.
 */
export interface NextHopResult {
    /**
     * @description Next hop type.
     */
    nextHopType: NextHopType | string;
    /**
     * @description Next hop IP Address
     */
    nextHopIpAddress: string;
    /**
     * @description The resource identifier for the route table associated with the route being returned. If the route being returned does not correspond to any user created routes then this field will be the string 'System Route'.
     */
    routeTableId: string;
}
