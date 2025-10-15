"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./footer";

export function FooterWrapper() {
  const pathname = usePathname();
  const excludedPrefixes = ["/teacher"]; // Customize as needed
  const shouldShowFooter = !excludedPrefixes.some(prefix => pathname.startsWith(prefix));

  return shouldShowFooter ? <Footer /> : null;
}