export = value;
/**
 * Evaluates interpolating using a constant value where values are missing
 *
 * @param {Number|Array} pointsToEvaluate     number or set of numbers
 *                                            for which step is calculated
 * @param {Array} functionValuesX             set of distinct x values
 * @param {Array} functionValuesY             set of distinct y=f(x) values
 * @param {Number} fillValue
 * @returns {Array}
 */
declare function value(pointsToEvaluate: number | any[], functionValuesX: any[], functionValuesY: any[], fillValue: number): any[];
