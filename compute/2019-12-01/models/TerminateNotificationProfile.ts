export interface TerminateNotificationProfile {
    /**
     * @description Configurable length of time a Virtual Machine being deleted will have to potentially approve the Terminate Scheduled Event before the event is auto approved (timed out). The configuration must be specified in ISO 8601 format, the default value is 5 minutes (PT5M)
     */
    notBeforeTimeout: string;
    /**
     * @description Specifies whether the Terminate Scheduled event is enabled or disabled.
     */
    enable: boolean;
}
