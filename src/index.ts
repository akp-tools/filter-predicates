/**
 * Filters out falsy elements.
 * @param _ An array element.
 * @returns boolean
 */
export const filterFalsy = (_: unknown) => Boolean(_);

/**
 * Filters out non-falsy elements.
 * @param _ An array element.
 * @returns boolean
 */
export const filterTruthy = (_: unknown) => !Boolean(_);

/**
 * Filters out null elements.
 * @param _ An array element.
 * @returns boolean
 */
export const filterNull = (_: unknown) => _ !== null;

export default {
  filterFalsy,
  filterTruthy,
  filterNull,
};
