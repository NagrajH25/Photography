import Image from "next/image";
import { Navbar } from "../components/navbar/navbar";
import { Container } from "../components/common/container";
import { BookingForm } from "../components/booking/booking-form";

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,rgba(250,253,255,0.98)_0%,rgba(234,242,247,0.96)_100%)]">
      <Container className="py-4">
        <Navbar />
        <section className="py-10">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#d7e2e8] bg-white shadow-[0_22px_60px_rgba(72,53,38,0.05)]">
            <div className="relative min-h-[60vh]">
              <Image
                src="/hero/y3.jpg"
                alt="Chandu Photography booking hero"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(248,251,253,0.06)_0%,rgba(28,41,52,0.28)_100%)]" />
              <div className="absolute inset-0 flex items-end">
                <div className="max-w-3xl p-6 sm:p-8 lg:p-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.38em] text-white/80">
                    Booking
                  </p>
                  <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
                    Book your story with Chandu Photography.
                  </h1>
                  <p className="mt-5 max-w-2xl text-sm leading-7 text-white/85 sm:text-base">
                    Tell us about your wedding, pre-wedding, portrait, or cinematic session and
                    we&apos;ll shape a clean enquiry that feels personal and simple.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid gap-10 px-6 py-10 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-12">
              <div className="flex flex-col justify-between gap-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#8d5b35]">
                    Enquiry
                  </p>
                  <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[#20303d] sm:text-4xl">
                    A simple form for the moments you want to remember.
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-8 text-[#60727d]">
                    Share a few details, and we&apos;ll come back with the right approach, whether
                    it&apos;s a wedding, pre-wedding, portrait, or a short film.
                  </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                  <div className="rounded-[1.5rem] border border-[#d7e2e8] bg-white/85 p-4">
                    <p className="font-semibold text-[#41515d]">What we need</p>
                    <p className="mt-2 text-sm leading-6 text-[#6f8190]">
                      Date, service, location, and a quick idea of the vibe.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-[#d7e2e8] bg-white/85 p-4">
                    <p className="font-semibold text-[#41515d]">How it helps</p>
                    <p className="mt-2 text-sm leading-6 text-[#6f8190]">
                      We can suggest the best package and a smoother plan.
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-[#d7e2e8] bg-white/85 p-4">
                    <p className="font-semibold text-[#41515d]">Reply style</p>
                    <p className="mt-2 text-sm leading-6 text-[#6f8190]">
                      Clean, personal, and focused on your story.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <BookingForm />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </main>
  );
}
