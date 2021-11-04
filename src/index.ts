/**
 * Filters out falsy elements.
 * @param _ An array element.
 * @returns boolean
 */
export const filterFalsy = (_: unknown) => Boolean(_);

/**
 * Filters out null elements.
 * @param _ An array element.
 * @returns boolean
 */
export const filterNull = (_: unknown) => _ !== null;

/**
 * Filters out NaN elements.
 * @param _ An array element.
 * @returns boolean
 */
export const filterNaN = (_: unknown) => !Number.isNaN(_);

/**
 * Filters out non-falsy elements.
 * @param _ An array element.
 * @returns boolean
 */
export const filterTruthy = (_: unknown) => !Boolean(_);

/**
 * Filters out undefined elements.
 * @param _ An array element.
 * @returns boolean
 */
export const filterUndefined = (_: unknown) => _ !== undefined;

export default {
  filterFalsy,
  filterNull,
  filterNaN,
  filterTruthy,
  filterUndefined,
};
