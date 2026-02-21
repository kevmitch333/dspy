/**
 * Analytics event tracking utilities.
 *
 * Connect your analytics provider here (GA4, Plausible, PostHog, etc.).
 *
 * Example with GA4:
 *   window.gtag('event', eventName, params);
 *
 * Example with Plausible:
 *   window.plausible(eventName, { props: params });
 */

export function trackEvent(eventName: string, params?: Record<string, string>) {
  // TODO: Connect to your analytics provider
  if (typeof window !== "undefined") {
    console.log(`[Analytics] ${eventName}`, params);
  }
}

export function trackCTAClick(ctaName: string, location: string) {
  trackEvent("cta_click", { cta: ctaName, location });
}

export function trackWaitlistSubmit(goal: string) {
  trackEvent("waitlist_submit", { goal });
}
