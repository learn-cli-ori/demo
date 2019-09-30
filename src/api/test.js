import { request } from '@/utils/request';

const TEST = '/api/users/test';

export const test = () => {
    return request({
        url: TEST,
        method: 'get'
    });
};