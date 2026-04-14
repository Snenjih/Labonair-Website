import { createFileRoute } from "@tanstack/react-router";
import { LandingPage } from "~/components/landing-page";
import { pageMeta } from "~/meta";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: pageMeta(
      "Labonair – The Zen-Mode First Editor for the AI Era",
      "A VS Code fork built for focus, privacy, and native AI. BYOK support for OpenAI, Anthropic, Google, DeepSeek, and Ollama. Telemetry removed. MIT licensed.",
    ),
  }),
  component: Home,
});

function Home() {
  return (
    <LandingPage
      title={
        <>
          The Zen-Mode First Editor
          <br />
          for the AI Era
        </>
      }
      subtitle="A VS Code fork built for focus, privacy, and native AI orchestration. Bring your own key. Own your data. Own your editor."
    />
  );
}
