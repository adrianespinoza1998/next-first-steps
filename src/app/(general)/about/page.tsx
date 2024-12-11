import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Adrian Espinoza",
  description: "About page for Adrian Espinoza",
  keywords: ["Adrian", "Espinoza", "About"],
};

export default function AboutPage() {
  return (
    <>
      <span className="text-7xl">About</span>
    </>
  );
}
