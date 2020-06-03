import { Origin } from '../enums/Origin';
import { Severity } from '../enums/Severity';
import { IssueType } from '../enums/IssueType';
/**
 * @description Information about an issue encountered in the process of checking for connectivity.
 */
export interface ConnectivityIssue {
    /**
     * @description The origin of the issue.
     */
    readonly origin: Origin | string;
    /**
     * @description The severity of the issue.
     */
    readonly severity: Severity | string;
    /**
     * @description The type of issue.
     */
    readonly type: IssueType | string;
    /**
     * @description Provides additional context on the issue.
     */
    readonly context: Array<Dictionary<string>>;
}
