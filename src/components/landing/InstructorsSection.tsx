import { TEACHER_ITEMS } from "@/constants/landing-data";
import { TeacherCard } from "@/components/teacher/TeacherCard";

export const InstructorsSection = () => {
  return (
    <section className="bg-muted/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            Learn from the best
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-[32px]">
            Educators who&apos;ve been in your seat
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Every instructor is subject-matter vetted and rated directly by
            students, every batch.
          </p>
        </div>

        <div className="overflow-x-auto md:overflow-visible">
          <div className="flex gap-4 pb-2 md:grid md:grid-cols-4 md:gap-5">
            {TEACHER_ITEMS.map((teacher) => (
              <div
                key={teacher.id}
                className="w-60 shrink-0 md:w-auto md:shrink md:min-w-0"
              >
                <TeacherCard teacher={teacher} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
