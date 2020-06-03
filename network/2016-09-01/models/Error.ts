import { ErrorDetails } from './ErrorDetails';
export interface Error {
    code: string;
    message: string;
    target: string;
    details: Array<ErrorDetails>;
    innerError: string;
}
