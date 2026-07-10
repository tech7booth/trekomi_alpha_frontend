import Link from "next/link";
import { Clock3, ArrowLeft, Sparkles } from "lucide-react";

export default function ComingSoonPage() {
  return (
    <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-12">
      <div className="mx-auto max-w-2xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
          <Clock3 className="h-10 w-10 text-primary" />
        </div>

        <div className="mt-8 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-4 py-2 text-sm font-medium text-muted-foreground">
          <Sparkles className="h-4 w-4" />
          New content is on the way
        </div>

        <h1 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
          Coming Soon
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          We're working on this page and it'll be available soon.
          Thank you for your patience while we build something great.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-medium text-primary-foreground transition hover:opacity-90"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <Link
            href="/courses"
            className="rounded-xl border px-6 py-3 font-medium transition hover:bg-muted"
          >
            Browse Courses
          </Link>
        </div>

        <div className="mt-14 rounded-2xl border bg-card p-6 text-left shadow-sm">
          <h2 className="font-semibold">What's coming?</h2>

          <ul className="mt-4 space-y-3 text-muted-foreground">
            <li>• New courses and learning paths</li>
            <li>• Interactive quizzes and assignments</li>
            <li>• Live classes with expert mentors</li>
            <li>• Progress tracking and certificates</li>
          </ul>
        </div>
      </div>
    </main>
  );
}