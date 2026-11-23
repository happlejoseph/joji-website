

import { useEffect } from "react";

const usePageMeta = (title, description) => {
  useEffect(() => {
    const previousTitle = document.title;

    let meta = document.querySelector('meta[name="description"]');
    const created = !meta;
    const previousDescription = meta?.getAttribute("content");

    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }

    document.title = title;
    meta.setAttribute("content", description);

    return () => {
      document.title = previousTitle;
      if (created) {
        meta.remove();
      } else {
        meta.setAttribute("content", previousDescription);
      }
    };
  }, [title, description]);
};

export default usePageMeta;