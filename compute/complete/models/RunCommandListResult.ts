import { RunCommandDocumentBase } from './RunCommandDocumentBase';

/**
 * @description The List Virtual Machine operation response.
 * @since 2017-03-30
 */
export interface RunCommandListResult {
    /**
     * @description The list of virtual machine run commands.
     */
    value?: Array<RunCommandDocumentBase>;
    /**
     * @description The uri to fetch the next page of run commands. Call ListNext() with this to fetch the next page of run commands.
     */
    nextLink: string;
}
