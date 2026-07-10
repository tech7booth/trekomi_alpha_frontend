import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScholarshipBannerProps {
  title?: string;
  minAmount?: string;
  maxAmount?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export const ScholarshipBanner = ({
  title = "Trekomi Alpha Scholarship Offer",
  minAmount = "₹10,000",
  maxAmount = "₹1,00,000",
  ctaLabel = "Join Premium Now",
  ctaHref = "/scholarship",
}: ScholarshipBannerProps) => {
  return (
    <div className="relative overflow-hidden rounded-xl bg-primary p-4 sm:px-6 md:py-8 md:px-10">
      <div className="absolute right-0 top-0 h-full w-1/3 opacity-90">
        <Image
          src="/images/home/scholarship-trophy.png"
          alt=""
          fill
          sizes="33vw"
          className="object-contain object-right"
        />
      </div>

      <div className="relative z-10 max-w-md">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/15 px-3 py-1 text-small font-semibold text-secondary">
          <Trophy className="size-3.5" />
          Scholarship
        </span>

        <h3 className="mt-3 text-2xl md:text-subheading font-bold text-primary-foreground">{title}</h3>

        <p className="mt-2 text-lg md:text-heading font-extrabold text-secondary">
          {minAmount} - {maxAmount}
        </p>

        <p className="mt-1 text-small md:text-body text-primary-foreground/80">Jeetne ka mauka!</p>

        <Link
          href={ctaHref}
          className={cn(
            "mt-5 inline-flex items-center gap-2 rounded-xl bg-secondary px-5 py-2.5",
            " text-caption md:text-body font-semibold text-secondary-foreground transition-transform hover:scale-[1.02] active:scale-[0.98]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground"
          )}
        >
          {ctaLabel}
          <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
};