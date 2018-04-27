/**
 * 
 */
import todoActions from './todo';
import filterActions from './filter';

// export default
export default {
    ...todoActions,
    ...filterActions
};
