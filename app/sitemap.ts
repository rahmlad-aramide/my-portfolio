import { MetadataRoute } from "next";

import { projectsData } from "./data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://dev.rahmlad.com";
  const projectUrls = projectsData.map((project) => ({
    url: `${baseUrl}/${project.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: "https://dev.rahmlad.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...projectUrls,
  ];
}
