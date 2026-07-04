export type ProcessStep = {
  index: string;
  name: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    index: "01",
    name: "Discover",
    description:
      "We immerse ourselves in your business, your users and your constraints — stakeholder interviews, data review and competitive analysis before a single pixel is placed.",
  },
  {
    index: "02",
    name: "Define",
    description:
      "We translate discovery into a clear product strategy and scope: what we're building, for whom, and how we'll know it worked.",
  },
  {
    index: "03",
    name: "Design",
    description:
      "Information architecture, UX flows and high-fidelity UI, refined through structured critique and, where needed, direct user testing.",
  },
  {
    index: "04",
    name: "Develop",
    description:
      "Production-grade engineering against the approved design system, built with the same rigour whether it's a landing page or a banking platform.",
  },
  {
    index: "05",
    name: "Deploy",
    description:
      "A structured, low-risk launch — staged rollouts, performance validation and accessibility sign-off before anything reaches production traffic.",
  },
  {
    index: "06",
    name: "Optimise",
    description:
      "Post-launch measurement against the goals we defined in Define, with iterative improvements based on real usage data.",
  },
];
