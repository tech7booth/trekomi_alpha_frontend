import { FEATURE_ITEMS } from "@/constants/landing-data";
import { ICON_MAP } from "@/lib/utils/icon-map";

export const WhyChooseUsSection = ()  => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Why Trekomi Alpha
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-[32px]">
          Built for students who take their exam seriously
        </h2>
        <p className="mt-3 text-base text-muted-foreground">
          Every feature exists to answer one question: is this actually
          moving your rank?
        </p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURE_ITEMS.map((feature) => {
          const Icon = ICON_MAP[feature.icon];
          return (
            <div
              key={feature.id}
              className="rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};
