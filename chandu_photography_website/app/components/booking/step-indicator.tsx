type StepIndicatorProps = {
  currentStep: number;
  totalSteps: number;
};

export function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="flex items-center gap-3">
      {Array.from({ length: totalSteps }, (_, index) => (
        <span
          key={index}
          className={`h-2.5 flex-1 rounded-full ${
            index + 1 <= currentStep ? "bg-[#8d5b35]" : "bg-[#e5d6c6]"
          }`}
        />
      ))}
    </div>
  );
}
