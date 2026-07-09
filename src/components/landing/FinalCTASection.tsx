import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const FinalCTASection = ()  => {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="relative overflow-hidden rounded-2xl bg-primary px-6 py-14 text-center sm:px-12">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_80%_at_50%_0%,rgba(253,186,18,0.18),transparent)]"
        />
        <div className="relative">
          <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
            Your next rank improvement starts today
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-primary-foreground/80">
            Create a free account in under a minute. No credit card required
            to browse courses or take your first scholarship test.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              asChild
              size="lg"
              className="rounded-xl bg-secondary text-secondary-foreground hover:bg-secondary/90"
            >
              <Link href="/register">
                Create free account
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-xl border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/scholarship">Take scholarship test</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
