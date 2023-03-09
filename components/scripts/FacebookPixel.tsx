// based on: https://davisgitonga.dev/blog/nextjs-google-analytics
import React from 'react'
import Script from 'next/script'

// Client-side cache, shared for the whole session of the user in the browser.
interface FacebookPixelScriptProps {
  id: string,
}

const FacebookPixelScript = (props: FacebookPixelScriptProps) => {
  const {
    id,
  } = props

  return (
    <>
      <Script
        id="fb-pixel-init"
        strategy="lazyOnload"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${id}');
            fbq('track', 'PageView');
          `,
        }}
      />
    </>
  )
}

export default FacebookPixelScript
