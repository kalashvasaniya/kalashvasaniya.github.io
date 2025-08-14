import type { Metadata } from "next";
import BreadcrumbSchema from "../components/BreadcrumbSchema";
import { generatePageMetadata } from "../lib/seo-config";

export const metadata: Metadata = generatePageMetadata('security-policy');

export default function SecurityPolicyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Home", url: "https://kalashvasaniya.com" },
          { name: "Security Policy", url: "https://kalashvasaniya.com/security-policy" },
        ]}
      />
      {children}
    </>
  );
}