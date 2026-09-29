export type AssessmentQuestion = {
  id: string;
  prompt: string;
  category: "fine-motor" | "gross-motor" | "self-care" | "planning" | "attention" | "rhythm";
  responseOptions: { value: number; label: string }[];
};

export const assessmentQuestions: AssessmentQuestion[] = [
  {
    id: "dressing",
    category: "self-care",
    prompt: "How often does your child seem frustrated or slower than expected when getting dressed, fastening clothing, or managing shoes?",
    responseOptions: [
      { value: 0, label: "Rarely or never" },
      { value: 1, label: "Sometimes" },
      { value: 2, label: "Often" },
      { value: 3, label: "Very often" },
    ],
  },
  {
    id: "writing",
    category: "fine-motor",
    prompt: "How often do handwriting, drawing, or craft tasks require more effort or take longer than expected?",
    responseOptions: [
      { value: 0, label: "Rarely or never" },
      { value: 1, label: "Sometimes" },
      { value: 2, label: "Often" },
      { value: 3, label: "Very often" },
    ],
  },
  {
    id: "throwing",
    category: "gross-motor",
    prompt: "How often does your child seem less coordinated when throwing, kicking, catching, or running compared with peers?",
    responseOptions: [
      { value: 0, label: "Rarely or never" },
      { value: 1, label: "Sometimes" },
      { value: 2, label: "Often" },
      { value: 3, label: "Very often" },
    ],
  },
  {
    id: "climbing",
    category: "gross-motor",
    prompt: "How often do playground tasks such as climbing, hopping, balancing, or jumping feel difficult or tiring?",
    responseOptions: [
      { value: 0, label: "Rarely or never" },
      { value: 1, label: "Sometimes" },
      { value: 2, label: "Often" },
      { value: 3, label: "Very often" },
    ],
  },
  {
    id: "organization",
    category: "planning",
    prompt: "How often does your child seem to need extra time to understand or follow multi-step instructions or routines?",
    responseOptions: [
      { value: 0, label: "Rarely or never" },
      { value: 1, label: "Sometimes" },
      { value: 2, label: "Often" },
      { value: 3, label: "Very often" },
    ],
  },
  {
    id: "sequencing",
    category: "planning",
    prompt: "How often does your child need extra support to sequence actions in order, such as completing a task step by step?",
    responseOptions: [
      { value: 0, label: "Rarely or never" },
      { value: 1, label: "Sometimes" },
      { value: 2, label: "Often" },
      { value: 3, label: "Very often" },
    ],
  },
  {
    id: "attention",
    category: "attention",
    prompt: "How often do visual tasks, timed games, or classroom activities seem harder because attention shifts quickly?",
    responseOptions: [
      { value: 0, label: "Rarely or never" },
      { value: 1, label: "Sometimes" },
      { value: 2, label: "Often" },
      { value: 3, label: "Very often" },
    ],
  },
  {
    id: "rhythm",
    category: "rhythm",
    prompt: "How often does your child have difficulty keeping pace with rhythmic games, songs, or movement patterns?",
    responseOptions: [
      { value: 0, label: "Rarely or never" },
      { value: 1, label: "Sometimes" },
      { value: 2, label: "Often" },
      { value: 3, label: "Very often" },
    ],
  },
  {
    id: "tools",
    category: "fine-motor",
    prompt: "How often do tasks with tools or small items such as scissors, utensils, or building toys take extra effort or coordination?",
    responseOptions: [
      { value: 0, label: "Rarely or never" },
      { value: 1, label: "Sometimes" },
      { value: 2, label: "Often" },
      { value: 3, label: "Very often" },
    ],
  },
  {
    id: "transitions",
    category: "attention",
    prompt: "How often do transitions, movement breaks, or quick changes in direction seem harder to manage?",
    responseOptions: [
      { value: 0, label: "Rarely or never" },
      { value: 1, label: "Sometimes" },
      { value: 2, label: "Often" },
      { value: 3, label: "Very often" },
    ],
  },
];