// src/config/siteConfig.js

export const siteConfig = {
  siteName: "Wild Wind Tattoo",
  siteUrl: "https://www.wildwindtattoo.com",
  address: {
    streetAddress: "1452 N. Western Ave",
    addressLocality: "Chicago",
    addressRegion: "Illinois",
    postalCode: "60622",
    addressCountry: "US"
  },
  phone: "+1-773-227-2027",
  email: "info@wildwindtattoo.com",
  defaultDescription: "Wild Wind Tattoo is a premier tattoo studio in Chicago, offering custom designs and professional tattoo services in a clean, creative environment.",
};

export const getSchemaOrgAddress = () => ({
  "@type": "PostalAddress",
  ...siteConfig.address
});

export const getBaseSchemaOrgData = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.siteName,
  url: siteConfig.siteUrl,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  address: getSchemaOrgAddress()
});

export const getServiceOfferings = () => ({
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tattoo Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Custom Tattoo Design",
          description: "Personalized tattoo design services"
        }
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Walk-in Tattoos",
          description: "Quick tattoo services for walk-in customers"
        }
      }
    ]
  }
});

export const getSeoData = (pageName, customData = {}) => {
  const defaultTitle = `${pageName} | ${siteConfig.siteName}`;
  const defaultCanonical = `${siteConfig.siteUrl}${customData.path || ''}`.split('?')[0];

  const baseSchema = getBaseSchemaOrgData();
  const serviceOfferings = getServiceOfferings();

  return {
    title: customData.title || defaultTitle,
    description: customData.description || siteConfig.defaultDescription,
    canonical: customData.canonical || defaultCanonical,
    schema: {
      ...baseSchema,
      ...serviceOfferings,
      ...customData.schema
    }
  };
};