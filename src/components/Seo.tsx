import { useEffect } from "react";

/** Sets the document title and meta description for a page. */
export default function Seo({ title, description }: { title: string; description: string }) {
  useEffect(() => {
    document.title = title;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }, [title, description]);
  return null;
}
