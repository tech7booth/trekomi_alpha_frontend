import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import {
  FaFacebookF as Facebook,
  FaInstagram as Instagram,
  FaLinkedinIn as Linkedin,
  FaYoutube as Youtube,
} from "react-icons/fa6";

import { cn } from "@/lib/utils";

const FOOTER_LINK_GROUPS = [
  {
    title: "Learn",
    links: [
      { label: "English Speaking", href: "/categories/english-speaking" },
      { label: "Public Speaking", href: "/categories/public-speaking" },
      { label: "Banking", href: "/categories/banking" },
      { label: "Competitive Exams", href: "/categories/competitive-exams" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Scholarship", href: "/scholarship" },
      { label: "Careers", href: "/careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Refund Policy", href: "/refund-policy" },
    ],
  },
] as const;

const SOCIAL_LINKS = [
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
] as const;

export const Footer = () => {
  return (
    <footer className="hidden border-t border-border bg-card md:block">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-5">
          <div className="col-span-2">
            <Link href="/" className="text-title font-bold text-foreground">
              TREKOMI <span className="text-primary">ALPHA</span>
            </Link>
            <p className="mt-3 max-w-xs text-caption text-muted-foreground">
              Learn Today, Lead Tomorrow. English Speaking, Public Speaking, Banking and
              other subjects taught by expert instructors.
            </p>

            <div className="mt-4 space-y-2">
              <a
                href="mailto:support@trekomialpha.com"
                className="flex items-center gap-2 text-caption text-muted-foreground hover:text-primary"
              >
                <Mail className="size-4" />
                support@trekomialpha.com
              </a>
              <a
                href="tel:+910000000000"
                className="flex items-center gap-2 text-caption text-muted-foreground hover:text-primary"
              >
                <Phone className="size-4" />
                +91 00000 00000
              </a>
            </div>

            <div className="mt-5 flex items-center gap-2">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={cn(
                    "flex size-9 items-center justify-center rounded-xl border border-border text-muted-foreground transition-colors",
                    "hover:border-primary hover:bg-accent hover:text-primary",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  )}
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {FOOTER_LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h4 className="text-title font-semibold text-foreground">{group.title}</h4>
              <ul className="mt-3 space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-caption text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 sm:flex-row">
          <p className="text-small text-muted-foreground">
            © {new Date().getFullYear()} Trekomi Alpha. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-small text-muted-foreground">
            <Link href="/terms" className="hover:text-primary">Terms</Link>
            <Link href="/privacy" className="hover:text-primary">Privacy</Link>
            <Link href="/sitemap.xml" className="hover:text-primary">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};