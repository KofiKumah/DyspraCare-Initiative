export type MilestoneGroup = {
  age: string;
  title: string;
  summary: string;
  areas: { label: string; examples: string[] }[];
};

export const milestoneGroups: MilestoneGroup[] = [
  {
    age: "2–4 years",
    title: "Finding their footing",
    summary: "Early movement and play are full of trial and error. Children develop at different paces.",
    areas: [
      { label: "Movement", examples: ["Climbing onto furniture", "Kicking or throwing a ball"] },
      { label: "Hands", examples: ["Stacking blocks", "Trying a spoon or chunky crayons"] },
    ],
  },
  {
    age: "5–7 years",
    title: "Growing independence",
    summary: "New routines bring more chances to notice what feels easy and what takes extra practice.",
    areas: [
      { label: "Movement", examples: ["Learning to hop or catch", "Joining in playground games"] },
      { label: "Hands", examples: ["Using scissors", "Getting dressed and handling fasteners"] },
    ],
  },
  {
    age: "8–12 years",
    title: "Building confidence",
    summary: "School, hobbies, and self-care can make coordination differences more visible.",
    areas: [
      { label: "Movement", examples: ["Keeping pace in PE", "Riding a bike or learning a sport"] },
      { label: "Hands", examples: ["Managing handwriting tasks", "Organizing belongings and materials"] },
    ],
  },
];