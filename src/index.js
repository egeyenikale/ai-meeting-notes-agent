export const project = {
  slug: "ai-meeting-notes-agent",
  title: "AI Meeting Notes Agent",
  description: "Agent that turns meeting transcripts into action-oriented notes.",
  features: [
  "Transcript import",
  "Topic extraction",
  "Action items",
  "Decision tracking",
  "Follow-up reminders",
  "Markdown export"
  ]
};

export function summarizeProject() {
  return `${project.title}: ${project.features.length} planned features`;
}
