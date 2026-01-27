import Image from "next/image";
import { Card } from "@/components/ui/card";

export default function AboutSection() {
  return (
    <section className="w-full">
      <Card className="mx-auto shadow-none rounded-3xl bg-gray-200/60 p-6 md:p-12">
        <div className="grid grid-cols-1 px-5 items-center gap-10 md:grid-cols-2 max-md:row-reverse">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-orange-500 md:text-5xl">
              ABOUT ME
            </h2>

            <div className="mt-6 space-y-5 text-foreground! leading-relaxed">
              <p>
                I am Shruti Sharma, a psychologist dedicated to helping adults
                build emotional resilience, self-awareness, and healthier
                coping patterns. My approach to therapy is warm, collaborative,
                and client-centered.
              </p>

              <p>
                I believe every individual’s experience is unique, and therapy
                should be tailored to your personal needs, pace, and goals. I
                work with adults facing emotional challenges related to stress,
                anxiety, relationships, career pressure, and life transitions.
              </p>

              <p>
                In our sessions, you will find a non-judgmental and supportive
                environment where you can speak openly, explore your thoughts
                and emotions, and develop practical tools for lasting change.
                Therapy is not about fixing what is “wrong” with you—it is about
                understanding yourself better and learning healthier ways to
                move forward.
              </p>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative flex justify-center md:justify-end">
            <Image
              src="/about.png"
              alt="Therapist illustration"
              width={320}
              height={320}
              className="w-[260px] md:w-[360px]"
              priority
            />
          </div>
        </div>
      </Card>
    </section>
  );
}
