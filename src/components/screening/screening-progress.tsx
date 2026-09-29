const steps = ["Caregiver questions", "Optional activities", "Your summary"];

export function ScreeningProgress({ currentStep }: { currentStep: 1 | 2 | 3 }) {
  return (
    <nav className="screening-journey" aria-label="Screening progress">
      <ol>
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCurrent = stepNumber === currentStep;
          const isComplete = stepNumber < currentStep;

          return (
            <li
              key={step}
              className={isCurrent ? "journey-current" : isComplete ? "journey-complete" : ""}
              aria-current={isCurrent ? "step" : undefined}
            >
              <span className="journey-number" aria-hidden="true">{isComplete ? "✓" : stepNumber}</span>
              <span>{step}</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
