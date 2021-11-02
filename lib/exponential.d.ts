export = evaluateExponential;
/**
 * Evaluates interpolating expontential at the set of numbers
 * or at a single number for the function y=f(x)
 *
 * @param {Number|Array} pointsToEvaluate     number or set of numbers
 *                                            for which polynomial is calculated
 * @param {Array} functionValuesX             set of distinct x values
 * @param {Array} functionValuesY             set of distinct y=f(x) values
 * @returns {Array}
 */
declare function evaluateExponential(pointsToEvaluate: number | any[], functionValuesX: any[], functionValuesY: any[]): any[];
