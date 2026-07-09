import { HERO_STATS } from "@/constants/landing-data";
import { ICON_MAP } from "@/lib/utils/icon-map";
import { AnimatedCounter } from "@/components/landing/AnimatedCounter";

export const StatsSection = ()  => {
  return (
    <section className="border-y border-border bg-card/50">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 lg:grid-cols-4 lg:px-8">
        {HERO_STATS.map((stat) => {
          const Icon = ICON_MAP[stat.icon];
          return (
            <div key={stat.id} className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-2xl font-bold tracking-tight text-foreground">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
