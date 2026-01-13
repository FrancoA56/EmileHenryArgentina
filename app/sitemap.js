export const dynamic = "force-static";


export default function sitemap() {
  const baseUrl = "https://www.emilehenry.com.ar";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/productos`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/acercade`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/preguntasfrecuentes`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/cacerolas`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/complementos`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/fuente`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pan`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/ramekin`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/vajilla`,
      lastModified: new Date(),
    },
  ];
}
