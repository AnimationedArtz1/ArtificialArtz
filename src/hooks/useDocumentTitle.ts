import { useEffect } from 'react';

const BASE_TITLE = 'ArtificialArtz';

export const useDocumentTitle = (pageTitle: string) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = pageTitle ? `${pageTitle} | ${BASE_TITLE}` : BASE_TITLE;

    return () => {
      document.title = previousTitle;
    };
  }, [pageTitle]);
};
