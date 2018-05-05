/** 
 * Model mapper#user
 */
//
import { store } from '../../configs/store';
//
import {
    encryptPassword
} from '../../helpers';
//
import {
    userAdd,
    userDel,
    userEdit,
    authSet
} from '../../actions';
//
import {
    mUser
} from '../user';

/**
 * 
 * 
 * @export
 * @class UserMapper
 */
export default class UserMapper {
    /**
     * 
     * 
     * @static
     * @memberof UserMapper
     */
    static findUser4Login(username, password) {
        let pass = encryptPassword(password);
        //
        let { users } = store.getState();
        //
        let foundUser = null;
        for (let i = 0; i < users.length; i++) {
            if ((username === users[i].username)
                && (pass === users[i].password)
            ) {
                foundUser = users[i];
                break;
            }
        }
        return foundUser;
    }

    /**
     * 
     * 
     * @static
     * @param {Object} data 
     * @param {Object} [options={}] 
     * @returns 
     * @memberof UserMapper
     */
    static addUser(data, options = {}) {
        try {
            let newUser = new mUser(data);
            // Verify user data...
            store.dispatch(userAdd(newUser));
            // Auto login?
            let { autoLogin } = (options || {});
            if (true === autoLogin) {
                store.dispatch(authSet(newUser));
            }
        } catch (err) {
            return err;
        }
    }
}
