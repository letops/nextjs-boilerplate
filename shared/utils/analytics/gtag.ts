import { GA_TRACKING_IDS, GA_TRACKING_GROUP } from "@/constants/analytics";

// TODO: Check recommended props here: https://support.google.com/analytics/answer/9267735?visit_id=637892006529986923-2352346741&rd=1

const gtagExists = (): boolean => {
  return Boolean(window.gtag) && Boolean(GA_TRACKING_IDS.length)
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const GtagPageView = (url: string) => {
  if (!gtagExists()) {
    console.error('Tracking not enabled. Google might have been blocked.');
    return;
  }
  const opts = {
    groups: GA_TRACKING_GROUP,
    page_path: url,
  };

  GA_TRACKING_IDS.forEach((id: string) => {
    window.gtag("config", id, opts);
  })
};


export const GtagEvent = (
  action: string,
  eventParams: { [key: string]: any },
) => {
  if (!gtagExists) return;
  window.gtag("event", action, {
    ...eventParams,
    send_to: GA_TRACKING_GROUP,
  });
};
