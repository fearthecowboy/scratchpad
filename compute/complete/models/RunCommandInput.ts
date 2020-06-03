import { RunCommandInputParameter } from './RunCommandInputParameter';

/**
 * @description Capture Virtual Machine parameters.
 * @since 2017-03-30
 */
export interface RunCommandInput {
    /**
     * @description The run command id.
     */
    commandId?: string;
    /**
     * @description Optional. The script to be executed.  When this value is given, the given script will override the default script of the command.
     */
    script: Array<string>;
    /**
     * @description The run command parameters.
     */
    parameters: Array<RunCommandInputParameter>;
}
