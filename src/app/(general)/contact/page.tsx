import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - Adrian Espinoza",
  description: "Contact page for Adrian Espinoza",
  keywords: ["Adrian", "Espinoza", "Contact"],
};

export default function ContactPage() {
  return (
    <>
      <span className="text-7xl">Contact</span>
    </>
  );
}
