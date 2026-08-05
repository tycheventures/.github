import { defineMcp } from "@lovable.dev/mcp-js";
import getCompanyOverview from "./tools/get-company-overview";
import listPortfolio from "./tools/list-portfolio";
import listServices from "./tools/list-services";
import listTestimonials from "./tools/list-testimonials";

export default defineMcp({
  name: "archive-revival",
  title: "Archive Revival",
  version: "0.1.0",
  instructions:
    "Public, read-only tools describing Tyche Ventures: company overview and products, services offered, portfolio projects and clients, and client testimonials. All data is public marketing content from the website.",
  tools: [getCompanyOverview, listServices, listPortfolio, listTestimonials],
});
