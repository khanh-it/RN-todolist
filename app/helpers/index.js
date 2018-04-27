/**
 * 
 */

/**
 * 
 * @return {String}
 */
export function uniqueID() {
    return new String(Date().now() + Math.random()).toString();
}
