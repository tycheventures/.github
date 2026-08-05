import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { FOOTER_SERVICES, SERVICES } from "../../site-data";

export default defineTool({
  name: "list_services",
  title: "List services",
  description:
    "List the services Tyche Ventures offers, with a description and page URL for each. Optionally filter by a keyword.",
  inputSchema: {
    query: z
      .string()
      .optional()
      .describe("Optional keyword to filter services by title or description, e.g. 'seo'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ query }) => {
    const q = query?.trim().toLowerCase();
    const services = SERVICES.filter(
      (s) => !q || s.title.toLowerCase().includes(q) || s.text.toLowerCase().includes(q),
    ).map((s) => ({ title: s.title, description: s.text, url: s.href }));

    const payload = {
      services,
      additionalServices: FOOTER_SERVICES.map((s) => ({ title: s.label, url: s.href })),
    };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: payload,
    };
  },
});
