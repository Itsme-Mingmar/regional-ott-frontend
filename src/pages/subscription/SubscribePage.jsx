import { useState } from "react";
import PlanSelector from "./PlanSelector";
import AccountForm from "./AccountForm";

const SubscribePage = () => {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [billing, setBilling] = useState(null);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-20">
      {step === 1 && (
        <PlanSelector
          onNext={(plan, billing) => {
            setSelectedPlan(plan);
            setBilling(billing);
            setStep(2);
          }}
        />
      )}

      {step === 2 && <AccountForm selectedPlan={selectedPlan} billing={billing} />}
    </div>
  );
};

export default SubscribePage;