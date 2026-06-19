'use client';

import { useState, useEffect } from 'react';
import Script from 'next/script';
import Link from 'next/link';

const META_PIXEL_ID = '1537717031482759';

const pixelScript = `
  !function(f,b,e,v,n,t,s)
  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
  n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];
  s.parentNode.insertBefore(t,s)}(window,document,'script',
  'https://connect.facebook.net/en_US/fbevents.js');
  fbq('init','${META_PIXEL_ID}');
  fbq('track','PageView');
`;

export default function CookieBanner() {
  const [consent, setConsent] = useState<'accepted' | 'rejected' | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('cookie_consent');
    if (stored === 'accepted') {
      setConsent('accepted');
    } else if (stored === 'rejected') {
      setConsent('rejected');
    } else {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted');
    setConsent('accepted');
    setVisible(false);
  }

  function reject() {
    localStorage.setItem('cookie_consent', 'rejected');
    setConsent('rejected');
    setVisible(false);
  }

  return (
    <>
      {consent === 'accepted' && (
        <>
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{ __html: pixelScript }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      {visible && (
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-zinc-950 border-t border-white/10 px-6 py-5">
          <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs text-zinc-400 tracking-wide leading-relaxed">
              Wir verwenden den <span className="text-zinc-300">Meta Pixel</span>, um Besuche auf unserer Website zu analysieren und Werbung zu optimieren. Dabei werden Daten an Meta Platforms (Facebook) übertragen.{' '}
              <Link href="/datenschutz" className="text-zinc-300 underline underline-offset-2 hover:text-white transition-colors">
                Mehr erfahren
              </Link>
            </p>
            <div className="flex gap-3 flex-shrink-0">
              <button
                onClick={reject}
                className="px-5 py-2.5 text-xs uppercase tracking-widest font-bold border border-white/20 text-zinc-400 hover:border-white/40 hover:text-white transition-all"
              >
                Ablehnen
              </button>
              <button
                onClick={accept}
                className="px-5 py-2.5 text-xs uppercase tracking-widest font-bold border border-white/20 text-zinc-400 hover:border-white/40 hover:text-white transition-all"
              >
                Akzeptieren
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
