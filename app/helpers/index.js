/**
 * 
 */
import crypto from 'crypto';

/**
 * 
 * @return {String}
 */
export function uniqueID() {
    return new String(new Date().getTime() + Math.random()).toString();
}

/**
 * 
 * @return {String}
 */
export function encryptPassword(password) {
    const hash = crypto.createHmac('sha256', encryptPassword.salt)
      .update(password)
      .digest('hex')
    ;
    return hash;
}
encryptPassword.salt = '123-456-789';
