import { RunCommandDocumentBase } from './RunCommandDocumentBase';
import { RunCommandParameterDefinition } from './RunCommandParameterDefinition';
/**
 * @description Describes the properties of a Run Command.
 */
export interface RunCommandDocument extends RunCommandDocumentBase {
    /**
     * @description The script to be executed.
     */
    script?: Array<string>;
    /**
     * @description The parameters used by the script.
     */
    parameters: Array<RunCommandParameterDefinition>;
}
