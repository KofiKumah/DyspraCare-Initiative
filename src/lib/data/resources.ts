export type Resource = {
  slug: string;
  category: string;
  title: string;
  description: string;
  readTime: string;
  icon: "book" | "sparkles" | "messages";
  content: Array<{
    heading: string;
    paragraphs: string[];
  }>;
};

export const resources: Resource[] = [
  {
    slug: "understanding-dcd",
    category: "A gentle introduction",
    title: "Understanding DCD",
    description: "A plain-language guide to developmental coordination disorder and everyday life.",
    readTime: "6 min read",
    icon: "book",
    content: [
      {
        heading: "What is DCD?",
        paragraphs: [
          "Developmental coordination disorder (DCD) is a condition that affects how a child plans and carries out everyday movements. It is not about laziness or lack of effort. It is a real challenge with coordination, balance, and motor planning.",
          "Children with DCD may struggle with tasks such as writing, running, getting dressed, or managing classroom activities. These difficulties can be frustrating, especially when a child wants to do the same things as their peers.",
        ],
      },
      {
        heading: "Why it may be harder than it looks",
        paragraphs: [
          "A task that looks simple to an adult may require lots of coordination, timing, and physical control. For children with DCD, even routine actions can take extra effort, which may lead to fatigue, anxiety, or avoidance.",
          "That does not mean they are not trying. It usually means they are working harder to complete the same task.",
        ],
      },
      {
        heading: "What useful support looks like",
        paragraphs: [
          "Support is often practical and low-pressure: breaking tasks into smaller steps, allowing extra time, and focusing on confidence rather than speed. Families and educators can look for patterns and reduce unnecessary demands where possible.",
          "Early observation and consistent, supportive routines can help children feel more capable and less discouraged.",
        ],
      },
    ],
  },
  {
    slug: "small-supports-meaningful-difference",
    category: "For home & school",
    title: "Small supports, meaningful difference",
    description: "Practical ways to make routines feel more manageable for a child.",
    readTime: "5 min read",
    icon: "sparkles",
    content: [
      {
        heading: "Start with the routine, not the perfection",
        paragraphs: [
          "Many children with coordination differences do best when daily routines are clear and predictable. A step-by-step visual checklist, a consistent order of tasks, or a calm start to the morning can reduce overwhelm.",
          "Small changes can make a big difference, especially if they reduce sensory load or decision fatigue.",
        ],
      },
      {
        heading: "Reduce friction in everyday tasks",
        paragraphs: [
          "Examples might include placing shoes and bag in the same spot, helping with one task at a time, or using larger writing tools or adapted seating. The goal is to support participation without making the child feel singled out.",
          "When supports are built into the routine, children often experience more success and fewer meltdowns.",
        ],
      },
      {
        heading: "Notice strengths, not just struggles",
        paragraphs: [
          "Many children with coordination difficulties have strong ideas, creativity, problem-solving skills, and social awareness. A supportive environment helps those strengths grow while practical tasks become easier to manage.",
          "This approach helps children build confidence without focusing only on what is difficult.",
        ],
      },
    ],
  },
  {
    slug: "talking-with-care-team",
    category: "Starting a conversation",
    title: "Talking with your child's care team",
    description: "Questions and observations that can help you prepare for a professional visit.",
    readTime: "4 min read",
    icon: "messages",
    content: [
      {
        heading: "What to bring up",
        paragraphs: [
          "It can help to write down a few examples of challenges you have noticed at home, at school, or during play. This may include running, throwing, dressing, sitting still, handwriting, or getting frustrated with everyday tasks.",
          "You do not need to have a diagnosis or a perfect explanation. Helpful information is often practical and specific.",
        ],
      },
      {
        heading: "Questions that are useful to ask",
        paragraphs: [
          "Ask how the professional views the child's development, what they have noticed, and whether more assessment would be helpful. It can also be useful to ask how the child's routines and environment may be affecting those difficulties.",
          "You might also ask what supports are often helpful in school or at home.",
        ],
      },
      {
        heading: "A collaborative process",
        paragraphs: [
          "The goal of a consultation is not to label a child quickly, but to gather useful information and support next steps. Shared observations from teachers, family, and healthcare professionals often make the picture clearer.",
          "Good conversations lead to better understanding and better support over time.",
        ],
      },
    ],
  },
];

export const faqs = [
  {
    question: "Can DyspraCare diagnose my child?",
    answer: "No. DyspraCare is an educational and preliminary screening tool. It cannot diagnose DCD or replace an assessment by a qualified healthcare professional.",
  },
  {
    question: "What does the screening involve?",
    answer: "The planned experience combines caregiver observations with simple, optional activities. It is designed to help organize what you notice, not to label a child.",
  },
  {
    question: "Is every child who finds coordination difficult affected by DCD?",
    answer: "No. Coordination challenges can have many explanations, and development varies. A qualified professional can consider your child's broader history and needs.",
  },
  {
    question: "What should I do if I'm concerned?",
    answer: "Consider sharing your observations with your child's pediatrician, family doctor, or another qualified professional. They can discuss appropriate next steps and referrals.",
  },
] as const;
