"use client";

import { Flame, BookOpen, Trophy, GraduationCap } from "lucide-react";

interface GreetingSectionProps {
    name: string;
    streak?: number;
    courses?: number;
    progress?: number;
    certificates?: number;
}

export function GreetingSection({
    name,
    streak = 7,
    courses = 12,
    progress = 86,
    certificates = 5,
}: GreetingSectionProps) {
    const hour = new Date().getHours();

    const greeting =
        hour < 12
            ? "Good Morning"
            : hour < 17
                ? "Good Afternoon"
                : "Good Evening";
    return (
        <section className="space-y-5">
            <div>
                <p className="text-sm text-muted-foreground">
                    {greeting} 👋
                </p>

                <h1 className="mt-1 text-3xl font-bold tracking-tight">
                    {name}
                </h1>

                <p className="mt-2 text-sm text-muted-foreground">
                    Keep learning consistently. Every lesson gets you closer to your goal.
                </p>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
                <StatCard
                    icon={<Flame className="size-5 text-orange-500" />}
                    value={`${streak} Days`}
                    label="Learning Streak"
                />

                <StatCard
                    icon={<BookOpen className="size-5 text-blue-600" />}
                    value={courses}
                    label="Enrolled Courses"
                />

                <StatCard
                    icon={<GraduationCap className="size-5 text-green-600" />}
                    value={`${progress}%`}
                    label="Overall Progress"
                />

                <StatCard
                    icon={<Trophy className="size-5 text-yellow-500" />}
                    value={certificates}
                    label="Certificates"
                />
            </div>

            <div className="rounded-2xl bg-primary p-5 text-primary-foreground">
                <p className="text-sm opacity-80">
                    Continue Learning
                </p>

                <h3 className="mt-1 text-xl font-semibold">
                    English Speaking Mastery
                </h3>

                <p className="mt-2 text-sm opacity-80">
                    Lesson 12 of 30
                </p>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/20">
                    <div
                        className="h-full rounded-full bg-white"
                        style={{ width: "40%" }}
                    />
                </div>

                <button className="mt-5 rounded-xl bg-white px-5 py-2 text-sm font-semibold text-primary transition hover:opacity-90">
                    Resume Course
                </button>
            </div>
        </section>
    );
}

interface StatCardProps {
    icon: React.ReactNode;
    value: string | number;
    label: string;
}

function StatCard({ icon, value, label }: StatCardProps) {
    return (
        <div className="rounded-2xl border bg-card p-4 shadow-sm transition hover:shadow-md">
            <div className="mb-3 flex size-10 items-center justify-center rounded-xl bg-muted">
                {icon}
            </div>

            <h3 className="text-xl font-bold">{value}</h3>

            <p className="text-xs text-muted-foreground">
                {label}
            </p>
        </div>
    );
}