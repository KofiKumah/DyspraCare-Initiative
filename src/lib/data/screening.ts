export const screeningSteps = [
  { number: "01", title: "Share what you notice", description: "Answer a few guided questions about everyday activities and routines." },
  { number: "02", title: "Explore at your pace", description: "Try simple, optional activities together in a familiar environment." },
  { number: "03", title: "Reflect on next steps", description: "Review an educational summary you can use to guide a conversation with a professional." },
] as const;

export const assessmentConfig = {
  mode: "educational-only",
  producesDiagnosis: false,
  disclaimer: "This preliminary screening is not a medical diagnosis and is not a substitute for professional assessment.",
} as const;