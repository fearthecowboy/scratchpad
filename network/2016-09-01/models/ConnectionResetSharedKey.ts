export interface ConnectionResetSharedKey {
    /**
     * @description The virtual network connection reset shared key length, should between 1 and 128.
     */
    keyLength?: int32 & Minimum<1> & Maximum<128>;
}
