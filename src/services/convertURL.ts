export function convertURL(url: string): string {
    try {
      const { hostname, pathname } = new URL(url);
      const domain = hostname.split('.').slice(-3).join('.').replace('www.',''); // Get the last 3 parts of the domain
  
      if (hostname == 'github.com') {
          const firstPathSegment = pathname.split('/').filter(Boolean)[0]; // Get first non-empty segment
          return `${domain}/${firstPathSegment || ''}`;
      }
  
      return domain;
    } catch (error) {
        return url;
    }
}