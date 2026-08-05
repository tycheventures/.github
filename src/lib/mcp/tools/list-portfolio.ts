import { defineTool } from "@lovable.dev/mcp-js";
import { CLIENTS, PROJECTS, SITE } from "../../site-data";

export default defineTool({
  name: "list_portfolio",
  title: "List portfolio",
  description:
    "List Tyche Ventures portfolio projects and client brands, each with its case-study or website URL.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = {
      projects: PROJECTS.map((p) => ({ title: p.title, caseStudyUrl: p.href })),
      clients: CLIENTS.map((c) => ({ name: c.name, website: c.href })),
      allWorkUrl: `${SITE}/work/`,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
