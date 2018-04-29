/**
 * 
 */

/**
 * 
 * @return {String}
 */
export function uniqueID() {
    return new String(new Date().getTime() + Math.random()).toString();
}
