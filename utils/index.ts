/**
 * Create search params from object
 * @param obj
 */
export const createSearchParams = (obj: object) => {
    return `?` + new URLSearchParams(obj as any).toString();
};
