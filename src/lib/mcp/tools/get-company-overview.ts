import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { COUNTERS, FOOTER_LINKS, SITE, SOCIALS } from "../../site-data";

const OVERVIEW = {
  company: "Tyche Ventures",
  tagline: "Building brands with passion and ulterior motive",
  website: SITE,
  summary:
    "Tyche Ventures is a web design, development and digital marketing company delivering websites, learning management systems, e-commerce stores, job portals, SEO and digital marketing services.",
  products: [
    {
      name: "Team WPGenius",
      url: "http://wpgenius.in/",
      description: "WordPress development, customization and ongoing support services.",
    },
    {
      name: "FenixHost",
      url: "https://shop.fenixhost.in/",
      description: "Domain registration, web hosting and server solutions.",
    },
    { name: "Plugins Marketplace", url: "https://plugins.gallery/", description: "Marketplace for WordPress plugins." },
    { name: "Themes Marketplace", url: "https://themes.expert/", description: "Marketplace for WordPress themes." },
  ],
};

export default defineTool({
  name: "get_company_overview",
  title: "Get company overview",
  description:
    "Get an overview of Tyche Ventures: tagline, summary, products, headline statistics, key page links and social profiles.",
  inputSchema: {},
  outputSchema: { overview: z.any() },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const payload = {
      ...OVERVIEW,
      stats: COUNTERS.map((c) => ({ label: c.label, value: `${c.value}${c.suffix}` })),
      links: FOOTER_LINKS.map((l) => ({
        label: l.label,
        url: l.internal ? `${SITE}${l.href}/` : l.href,
      })),
      social: SOCIALS,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(payload, null, 2) }],
      structuredContent: { overview: payload },
    };
  },
});
