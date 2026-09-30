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
          "DCD is often described as a 'hidden' disability because a child may look fine on the outside, but coordination challenges can significantly affect their daily life, school performance, and self-confidence.",
        ],
      },
      {
        heading: "How common is DCD?",
        paragraphs: [
          "Research suggests that about 5-6% of school-age children have DCD, making it as common as dyslexia. It affects boys and girls equally, though it is sometimes underdiagnosed in girls.",
          "Many children go through school without a formal diagnosis, struggling quietly with activities their classmates find easy. Early recognition and support can make a significant difference.",
        ],
      },
      {
        heading: "Why it may be harder than it looks",
        paragraphs: [
          "A task that looks simple to an adult may require lots of coordination, timing, and physical control. For children with DCD, even routine actions can take extra effort, which may lead to fatigue, anxiety, or avoidance.",
          "That does not mean they are not trying. It usually means they are working harder to complete the same task. Think of it like trying to walk while paying close attention to every step—most of us do it automatically, but for a child with DCD, coordination requires focused effort.",
          "Common challenges include: using scissors or cutlery, tying shoelaces, catching a ball, riding a bicycle, writing neatly, or following multi-step instructions.",
        ],
      },
      {
        heading: "What causes DCD?",
        paragraphs: [
          "DCD is a neurological difference—it reflects how the brain processes and organizes motor information. It is not caused by weakness, muscle tone problems, or a lack of practice.",
          "The exact cause is not yet fully understood, but research shows that DCD involves differences in how the brain plans, coordinates, and executes movement. It often runs in families.",
          "DCD is not a result of intellectual disability or lack of opportunity. Children with DCD often have typical or above-average intelligence.",
        ],
      },
      {
        heading: "What useful support looks like",
        paragraphs: [
          "Support is often practical and low-pressure: breaking tasks into smaller steps, allowing extra time, and focusing on confidence rather than speed. Families and educators can look for patterns and reduce unnecessary demands where possible.",
          "Early observation and consistent, supportive routines can help children feel more capable and less discouraged. Simple changes—like a quieter workspace, visual schedules, or adapted tools—can reduce stress and improve success.",
          "A child with DCD often thrives when their environment is predictable, their challenges are understood, and their strengths are recognized and celebrated.",
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
          "Small changes can make a big difference, especially if they reduce sensory load or decision fatigue. When routines are stable, children spend less mental energy figuring out 'what's next' and more energy on the task at hand.",
          "Examples: Use the same route to school, keep morning supplies in the same place, or establish a predictable homework routine. Consistency is calming.",
        ],
      },
      {
        heading: "Reduce friction in everyday tasks",
        paragraphs: [
          "Examples might include placing shoes and bag in the same spot, helping with one task at a time, or using larger writing tools or adapted seating. The goal is to support participation without making the child feel singled out.",
          "When supports are built into the routine, children often experience more success and fewer meltdowns. Practical adaptations reduce frustration and free up energy for learning.",
          "At home: Use adaptive scissors, grips for pencils, or larger buttons for clothing. At school: Allow preferential seating, extra time for written work, or opportunities for movement breaks. These are not 'special treatment'—they are accommodations that level the playing field.",
        ],
      },
      {
        heading: "Break tasks into manageable steps",
        paragraphs: [
          "Instead of 'Get ready for school,' try: '1) Put on your socks. 2) Put on your shoes. 3) Get your backpack.' Visual lists work especially well.",
          "Use pictures alongside words if possible. A child with DCD often benefits from seeing what success looks like before attempting a task.",
          "For complex tasks (like getting dressed or preparing lunch), breaking them down reduces cognitive load and increases the chance of independent success.",
        ],
      },
      {
        heading: "Notice strengths, not just struggles",
        paragraphs: [
          "Many children with coordination difficulties have strong ideas, creativity, problem-solving skills, and social awareness. A supportive environment helps those strengths grow while practical tasks become easier to manage.",
          "This approach helps children build confidence without focusing only on what is difficult. When a child feels capable in some areas, they are more resilient when facing challenges.",
          "Celebrate effort, progress, and creative thinking—not just speed or 'perfect' outcomes. A child who tries hard and learns something is succeeding, even if the result isn't polished.",
        ],
      },
      {
        heading: "Create a calm, organized space",
        paragraphs: [
          "A cluttered or overstimulating environment makes coordination tasks even harder. Clear space, soft lighting, and minimal distractions can dramatically improve focus and success.",
          "Designate specific areas for homework, sports, or quiet time. When the environment is organized, the child can focus on the task, not on managing chaos.",
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
        heading: "Prepare before the appointment",
        paragraphs: [
          "Before meeting with a healthcare professional, take time to observe and document patterns. This gives you concrete examples to discuss rather than general impressions.",
          "Keep a simple log for 1-2 weeks: Note times when your child struggles (e.g., 'Took 20 minutes to get dressed'), situations where they excel, and activities they avoid. Include context: Was it rushed? Tired? Hungry?",
          "Write down questions you have. A professional visit is often limited, so prioritizing your main concerns helps you get the most useful information.",
        ],
      },
      {
        heading: "What to bring up",
        paragraphs: [
          "It can help to write down a few examples of challenges you have noticed at home, at school, or during play. This may include running, throwing, dressing, sitting still, handwriting, or getting frustrated with everyday tasks.",
          "Be specific: Instead of 'He has trouble at school,' try 'He struggles to copy from the board and often misses steps when the teacher gives verbal instructions.' Specificity helps professionals understand the real impact.",
          "You do not need to have a diagnosis or a perfect explanation. Helpful information is often practical and specific. Share what you see, not what you think it means.",
        ],
      },
      {
        heading: "Questions that are useful to ask",
        paragraphs: [
          "Ask how the professional views the child's development, what they have noticed, and whether more assessment would be helpful. It can also be useful to ask how the child's routines and environment may be affecting those difficulties.",
          "You might also ask: 'What can we do at home to support this?' 'Are there simple strategies we should try first?' 'What signs should we watch for?' 'How often should we check in?'",
          "If a referral is needed: 'What is the next step? How long is the wait? What should we focus on in the meantime?'",
        ],
      },
      {
        heading: "Create a shared understanding",
        paragraphs: [
          "A good professional conversation helps you, the teacher, and the child all understand what's happening in the same way. This shared understanding is powerful—it reduces blame and increases cooperation.",
          "Ask the professional to explain things in plain language. You should understand the answer. If something is unclear, ask for clarification.",
          "Request written summaries or notes from the meeting. This helps you remember key points and share information with teachers or other caregivers consistently.",
        ],
      },
      {
        heading: "A collaborative process",
        paragraphs: [
          "The goal of a consultation is not to label a child quickly, but to gather useful information and support next steps. Shared observations from teachers, family, and healthcare professionals often make the picture clearer.",
          "Good conversations lead to better understanding and better support over time. You are an expert on your child—your insights matter.",
          "Remember: Seeking help is a sign of good parenting, not failure. Early support makes a real difference in a child's confidence, learning, and wellbeing.",
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
