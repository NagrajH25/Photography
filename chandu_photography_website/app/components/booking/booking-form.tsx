"use client";

import { useState } from "react";
import { bookingServices } from "../../data/site-data";
import { Button } from "../common/button";
import { StepIndicator } from "./step-indicator";
import { ServiceSelector } from "./service-selector";
import { DatePicker } from "./date-picker";
import { LocationInput } from "./location-input";
import { BudgetSlider } from "./budget-slider";
import { ContactForm } from "./contact-form";
import { SubmitButton } from "./submit-button";

export function BookingForm() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState(bookingServices[0]);
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState(1000);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const canContinue = step < 3;

  return (
    <form
      className="grid gap-6 rounded-[2rem] border border-[#d7e2e8] bg-white/92 p-6 shadow-[0_18px_40px_rgba(72,53,38,0.06)] sm:p-7"
      onSubmit={(event) => event.preventDefault()}
    >
      <StepIndicator currentStep={step} totalSteps={3} />

      {step === 1 ? (
        <div className="grid gap-4 md:grid-cols-2">
          <ServiceSelector value={service} options={bookingServices} onChange={setService} />
          <DatePicker value={date} onChange={setDate} />
          <LocationInput value={location} onChange={setLocation} />
          <BudgetSlider value={budget} onChange={setBudget} />
        </div>
      ) : null}

      {step === 2 ? (
        <div className="grid gap-4">
          <ContactForm
            name={name}
            email={email}
            phone={phone}
            onNameChange={setName}
            onEmailChange={setEmail}
            onPhoneChange={setPhone}
          />
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Tell us a little about your shoot, the mood you want, and anything important we should know."
            className="min-h-36 rounded-2xl border border-[#d7e2e8] bg-white px-4 py-3 text-sm text-[#20303d] outline-none placeholder:text-[#92a1aa]"
          />
        </div>
      ) : null}

      {step === 3 ? (
        <div className="rounded-3xl bg-[#f7efe4] p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#8d5b35]">
            Review
          </p>
          <div className="mt-4 space-y-2 text-sm text-[#5e4d42]">
            <p>Service: {service}</p>
            <p>Date: {date || "Not selected"}</p>
            <p>Location: {location || "Not selected"}</p>
            <p>Budget: ${budget}</p>
          <p>Name: {name || "Not entered"}</p>
          <p>Email: {email || "Not entered"}</p>
          <p>Phone: {phone || "Not entered"}</p>
          <p>Message: {message || "Not entered"}</p>
        </div>
      </div>
      ) : null}

      <div className="flex flex-wrap gap-3">
        {step > 1 ? (
          <Button type="button" variant="secondary" onClick={() => setStep(step - 1)}>
            Back
          </Button>
        ) : null}
        {canContinue ? (
          <Button type="button" onClick={() => setStep(step + 1)}>
            Continue
          </Button>
        ) : (
          <SubmitButton />
        )}
      </div>
    </form>
  );
}
