import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Minenhle Sibiya · Software Development Graduate" },
      { name: "description", content: "Portfolio of Minenhle Sibiya — Software Development Graduate building innovative technology solutions." },
      { property: "og:title", content: "Minenhle Sibiya · Software Development Graduate" },
      { property: "og:description", content: "Portfolio of Minenhle Sibiya — Software Development Graduate building innovative technology solutions." },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    window.location.replace("/portfolio.html");
  }, []);
  return null;
}
