import Link from "next/link";
import {GraduationCap } from "lucide-react";
import { FaFacebook as Facebook, FaInstagram as Instagram, FaLinkedin as Linkedin, FaYoutube as Youtube } from "react-icons/fa6";
import { FOOTER_LINK_GROUPS, SITE_CONFIG } from "@/constants/site";
import { NewsletterForm } from "@/components/landing/NewsletterForm";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com", icon: Instagram },
  { label: "YouTube", href: "https://youtube.com", icon: Youtube },
  { label: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { label: "Facebook", href: "https://facebook.com", icon: Facebook },
] as const;

export const Footer = ()  => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_3fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <GraduationCap className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-semibold tracking-tight text-foreground">
                {SITE_CONFIG.name}
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {SITE_CONFIG.description}
            </p>

            <p className="mt-6 text-sm font-medium text-foreground">
              Get exam updates in your inbox
            </p>
            <div className="mt-3">
              <NewsletterForm />
            </div>

            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  <social.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {FOOTER_LINK_GROUPS.map((group) => (
              <div key={group.title}>
                <p className="text-sm font-semibold text-foreground">{group.title}</p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Made for students preparing to do their best work.
          </p>
        </div>
      </div>
    </footer>
  );
};
