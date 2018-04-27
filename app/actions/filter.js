/**
 * Define project's actions#filter
 */
//
import {
    FILTER_SET,
    FILTER_MODE_ALL,
    FILTER_MODE_ACTIVE,
    FILTER_MODE_COMPLETED
} from './constants';

/**
 * 
 */
export function filterSet(filter) {
    return { type: FILTER_SET, filter };
}
