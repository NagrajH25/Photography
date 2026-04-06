import { ButtonLink } from "../common/button";
import { SectionWrapper } from "../common/section-wrapper";

export function CtaSection() {
  return (
    <SectionWrapper className="pb-16">
      <div className="rounded-[2rem] bg-[#2d1f19] px-6 py-10 text-[#fff7ef] shadow-[0_24px_70px_rgba(33,22,17,0.2)] sm:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#e8c39e]">
              Book Now
            </p>
            <h2 className="mt-4 font-serif text-4xl font-semibold sm:text-5xl">
              Ready to plan your next shoot?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#e7d8cb]">
              Whether it is a wedding, portrait session, event, or video project,
              the next step can start here.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/booking">Start Booking</ButtonLink>
            <ButtonLink href="/contact" variant="ghost">
              Contact Us
            </ButtonLink>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
