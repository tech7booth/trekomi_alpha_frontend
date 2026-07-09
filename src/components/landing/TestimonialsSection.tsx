import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { TESTIMONIAL_ITEMS } from "@/constants/landing-data";

export const TestimonialsSection = ()  => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto mb-12 max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary">
          Results, not promises
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-[32px]">
          What our students say
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {TESTIMONIAL_ITEMS.map((testimonial) => (
          <figure
            key={testimonial.id}
            className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
          >
            <Quote className="h-6 w-6 text-secondary" aria-hidden="true" />
            <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div
              className="mt-4 flex items-center gap-0.5"
              aria-label={`Rated ${testimonial.rating} out of 5`}
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={`${testimonial.id}-star-${index}`}
                  className="h-3.5 w-3.5 fill-secondary text-secondary"
                  aria-hidden="true"
                />
              ))}
            </div>
            <figcaption className="mt-4 flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full">
                <Image
                  src={testimonial.avatarUrl}
                  alt=""
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
