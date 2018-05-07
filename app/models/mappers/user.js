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
     * @param {*} user 
     */
    static userSignIn(user) {
        return store.dispatch(authSet(user));
    }

    /**
     * 
     * @param {*} user 
     */
    static userSignOut() {
        return store.dispatch(authSet());
    }

    /**
     * 
     * 
     * @static
     * @memberof UserMapper
     */
    static findUser4Login(username, password, options = {}) {
        //
        let foundUser = null;
        try {
            let pass = encryptPassword(password);
            //
            let { users } = store.getState();
            console.log('users: ', users);
            for (let i = 0; i < users.length; i++) {
                if ((username === users[i].username)
                    && (pass === users[i].password)
                ) {
                    foundUser = users[i];
                    break;
                }
            }
        } catch (err) {
            console.log('findUser4Login err: ', err);
        }
        // Auto login?
        let { autoSignIn } = (options || {});
        if (foundUser && (true === autoSignIn)) {
            UserMapper.userSignIn(foundUser);
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
            // Verify
            // +++
            // Format data
            // +++ password
            newUser.password = encryptPassword(newUser.password);
            // Verify user data...
            store.dispatch(userAdd(newUser));
            // Auto login?
            let { autoSignIn } = (options || {});
            if (true === autoSignIn) {
                UserMapper.userSignIn(newUser);
            }
        } catch (err) {
            return err;
        }
    }
}
