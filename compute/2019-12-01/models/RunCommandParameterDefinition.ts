
/**
 * @description Describes the properties of a run command parameter.
 */
export interface RunCommandParameterDefinition {
    /**
     * @description The run command parameter name.
     */
    name?: string;
    /**
     * @description The run command parameter type.
     */
    type?: string;
    /**
     * @description The run command parameter default value.
     */
    defaultValue: string;
    /**
     * @description The run command parameter required.
     */
    required: boolean;
}
