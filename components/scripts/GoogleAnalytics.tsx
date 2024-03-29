// based on: https://davisgitonga.dev/blog/nextjs-google-analytics
import * as React from 'react'
import Script from 'next/script'

interface GoogleAnalyticsScriptProps {
  id: string;
  group?: string;
}

const GoogleAnalyticsScript = ({
  id,
  group,
}: GoogleAnalyticsScriptProps) => (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${id}', {
              page_path: window.location.pathname,
              ${group ? `groups: '${group}'` : undefined}
            });
          `,
        }}
      />
    </>
)

export default GoogleAnalyticsScript
