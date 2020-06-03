
/**
 * @description List of properties of the device.
 * @since 2019-07-01
 */
export interface DeviceProperties {
    /**
     * @description Name of the device Vendor.
     */
    deviceVendor: string;
    /**
     * @description Model of the device.
     */
    deviceModel: string;
    /**
     * @description Link speed.
     */
    linkSpeedInMbps: int32;
}
