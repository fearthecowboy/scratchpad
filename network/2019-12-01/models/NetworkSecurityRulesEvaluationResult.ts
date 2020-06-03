
/**
 * @description Network security rules evaluation result.
 */
export interface NetworkSecurityRulesEvaluationResult {
    /**
     * @description Name of the network security rule.
     */
    name: string;
    /**
     * @description Value indicating whether protocol is matched.
     */
    protocolMatched: boolean;
    /**
     * @description Value indicating whether source is matched.
     */
    sourceMatched: boolean;
    /**
     * @description Value indicating whether source port is matched.
     */
    sourcePortMatched: boolean;
    /**
     * @description Value indicating whether destination is matched.
     */
    destinationMatched: boolean;
    /**
     * @description Value indicating whether destination port is matched.
     */
    destinationPortMatched: boolean;
}
