import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { TESTIMONIALS } from "../../site-data";

export default defineTool({
  name: "list_testimonials",
  title: "List testimonials",
  description: "List published client testimonials for Tyche Ventures.",
  inputSchema: {
    limit: z.number().int().optional().describe("Maximum number of testimonials to return."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ limit }) => {
    const max = limit && limit > 0 ? Math.min(limit, TESTIMONIALS.length) : TESTIMONIALS.length;
    const testimonials = TESTIMONIALS.slice(0, max).map((t) => ({
      name: t.name,
      company: t.company,
      quote: t.quote,
      website: t.href,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(testimonials, null, 2) }],
      structuredContent: { testimonials },
    };
  },
});
