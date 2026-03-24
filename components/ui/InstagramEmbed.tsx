'use client';

import { useEffect } from 'react';

export default function InstagramEmbed({ url }: { url: string }) {
  useEffect(() => {
    // Load Instagram script
    const script = document.createElement('script');
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={url}
      data-instgrm-version="14"
      style={{
        background: '#FFF',
        border: 0,
        borderRadius: '12px',
        margin: 0,
        width: '100%',
      }}
    />
  );
}
