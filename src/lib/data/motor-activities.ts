export type MotorActivity = {
  id: string;
  title: string;
  instructions: string;
  optional: true;
  area: "precision" | "coordination" | "rhythm";
  photoUrl: string;
};

export const motorActivities: MotorActivity[] = [
  {
    id: "path-tracing",
    title: "Precision path tracing",
    instructions: "Tap the glowing markers in order and keep your attention on the path across the board.",
    optional: true,
    area: "precision",
    photoUrl: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "target-tapping",
    title: "Hand-eye target tapping",
    instructions: "Race to tap each moving target as it appears, then keep your eyes on the next target quickly.",
    optional: true,
    area: "coordination",
    photoUrl: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "rhythm-sync",
    title: "Rhythm and synchronization",
    instructions: "Wait for the pulse, then tap in time to match the rhythm pattern with your child or with the screen.",
    optional: true,
    area: "rhythm",
    photoUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1000&q=80",
  },
];