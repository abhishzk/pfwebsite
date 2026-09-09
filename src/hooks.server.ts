import { redirect, type Handle } from '@sveltejs/kit';

const legacyRedirects: Record<string, string> = {
	'/casestudies/bill-reader-v3.html': '/work/bill-reader',
	'/casestudies/bill-reader-v3': '/work/bill-reader',
	'/casestudies/platform-delivery.html': '/work/platform-delivery',
	'/casestudies/platform-delivery': '/work/platform-delivery',
	'/casestudies/visajobs.html': '/work/visajobs',
	'/casestudies/visajobs': '/work/visajobs',
	'/casestudies/digital-bau-operating-model.html': '/work/digital-bau-operating-model',
	'/casestudies/digital-bau-operating-model': '/work/digital-bau-operating-model'
};

export const handle: Handle = async ({ event, resolve }) => {
	const destination = legacyRedirects[event.url.pathname];
	if (destination) redirect(301, destination);

	return resolve(event);
};
