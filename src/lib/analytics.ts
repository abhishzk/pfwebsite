import { browser } from '$app/environment';
import { init, track } from '@plausible-analytics/tracker';

export type AnalyticsEvent =
	'contact_click' | 'resume_download' | 'case_study_open' | 'linkedin_click' | 'product_visit';

let initialized = false;

export function initializeAnalytics() {
	if (!browser || initialized) return;

	init({
		domain: 'abhishzk.com',
		autoCapturePageviews: true,
		captureOnLocalhost: false,
		logging: false,
		bindToWindow: true
	});
	initialized = true;
}

export function trackEvent(eventName: AnalyticsEvent, props?: Record<string, string>) {
	if (!browser || !initialized) return;
	track(eventName, props ? { props } : {});
}
