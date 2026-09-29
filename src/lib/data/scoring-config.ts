export type FocusArea = "fine-motor" | "gross-motor" | "self-care" | "planning" | "attention" | "rhythm";

export type HomeActivity = {
  title: string;
  description: string;
  area: FocusArea;
};

export const areaLabels: Record<FocusArea, string> = {
  "fine-motor": "Fine-motor control",
  "gross-motor": "Gross-motor coordination",
  "self-care": "Daily living skills",
  planning: "Task planning and sequencing",
  attention: "Attention and transitions",
  rhythm: "Rhythm and timing",
};

export const homeActivityLibrary: Record<FocusArea, HomeActivity[]> = {
  "fine-motor": [
    {
      title: "Thread and sort",
      description: "Thread large beads or pipe cleaners and sort small items into a container to build hand control.",
      area: "fine-motor",
    },
    {
      title: "Sticker and shape play",
      description: "Place stickers on paper or trace large shapes to build control without pressure.",
      area: "fine-motor",
    },
  ],
  "gross-motor": [
    {
      title: "Obstacle path",
      description: "Set up a slow, playful path with cushions or tape for stepping, jumping, and balancing.",
      area: "gross-motor",
    },
    {
      title: "Ball and beanbag games",
      description: "Roll, kick, or toss a soft ball to encourage timing and coordination in a relaxed way.",
      area: "gross-motor",
    },
  ],
  "self-care": [
    {
      title: "Practice one step at a time",
      description: "Break dressing or brushing routines into small, consistent steps with praise and patience.",
      area: "self-care",
    },
    {
      title: "Simple routine cards",
      description: "Use picture cues for bath, dress, and snack time to reduce the mental load of sequencing.",
      area: "self-care",
    },
  ],
  planning: [
    {
      title: "Task ladder",
      description: "Create a short visual task ladder for a home task, then celebrate each completed step.",
      area: "planning",
    },
    {
      title: "Build and clean up",
      description: "Practice a small build-and-put-away routine to support order, sequencing, and turn-taking.",
      area: "planning",
    },
  ],
  attention: [
    {
      title: "Quick direction games",
      description: "Use short, clear directions and movement cues to support transitions and focus.",
      area: "attention",
    },
    {
      title: "Calm movement reset",
      description: "Add a short movement break before transitions to reset energy and attention gently.",
      area: "attention",
    },
  ],
  rhythm: [
    {
      title: "Beat and move",
      description: "Clap, march, or stomp along to a steady beat to build rhythm and timing awareness.",
      area: "rhythm",
    },
    {
      title: "Repeat-and-sync",
      description: "Repeat a short rhythmic action with a song, drum, or body movement to support pacing.",
      area: "rhythm",
    },
  ],
};

export const screeningScoringConfig = {
  methodology: "Educational snapshot based on caregiver observations and short movement tasks",
  thresholds: {
    low: 12,
    moderate: 20,
    high: 28,
  },
  overview:
    "This summary is not a diagnosis and is intended to highlight areas worth closer observation and a supportive conversation.",
};

export type ScreeningScoringConfig = typeof screeningScoringConfig;