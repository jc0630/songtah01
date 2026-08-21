import { useEffect } from 'react';

export interface PageMetaOptions {
  title: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
}

export function usePageMeta({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogUrl,
}: PageMetaOptions) {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // 2. Update Description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.setAttribute('name', 'description');
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute('content', description);
    }

    // 3. Update OG Title
    let ogTitleEl = document.querySelector('meta[property="og:title"]');
    if (!ogTitleEl) {
      ogTitleEl = document.createElement('meta');
      ogTitleEl.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitleEl);
    }
    ogTitleEl.setAttribute('content', ogTitle || title);

    // 4. Update OG Description
    if (description || ogDescription) {
      let ogDescEl = document.querySelector('meta[property="og:description"]');
      if (!ogDescEl) {
        ogDescEl = document.createElement('meta');
        ogDescEl.setAttribute('property', 'og:description');
        document.head.appendChild(ogDescEl);
      }
      ogDescEl.setAttribute('content', ogDescription || description || '');
    }

    // 5. Update OG URL
    let ogUrlEl = document.querySelector('meta[property="og:url"]');
    if (!ogUrlEl) {
      ogUrlEl = document.createElement('meta');
      ogUrlEl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrlEl);
    }
    ogUrlEl.setAttribute('content', ogUrl || window.location.href);

    // 6. Keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.setAttribute('name', 'keywords');
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.setAttribute('content', keywords);
    }
  }, [title, description, keywords, ogTitle, ogDescription, ogUrl]);
}
