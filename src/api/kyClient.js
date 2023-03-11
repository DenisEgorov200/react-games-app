import ky from 'ky';

import { apiConfig } from './apiConfig';

export const kyClient = ky.create({
	prefixUrl: apiConfig.baseUrl,
});
