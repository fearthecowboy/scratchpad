import { OutputType } from '../enums/OutputType';
import { ConnectionMonitorWorkspaceSettings } from './ConnectionMonitorWorkspaceSettings';
/**
 * @description Describes a connection monitor output destination.
 */
export interface ConnectionMonitorOutput {
    /**
     * @description Connection monitor output destination type. Currently, only "Workspace" is supported.
     */
    type: OutputType | string;
    /**
     * @description Describes the settings for producing output into a log analytics workspace.
     */
    workspaceSettings: ConnectionMonitorWorkspaceSettings;
}
