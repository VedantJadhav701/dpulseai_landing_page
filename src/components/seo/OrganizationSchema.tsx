export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": "Dpulseai",
    "alternateName": "DPULSE AI PRIVATE LIMITED",
    "url": "https://dpulseai.com",
    "logo": "https://dpulseai.com/DPULSE%20AI%20WHITE@2x.png",
    "sameAs": [
      "https://www.linkedin.com/company/dpulseai",
      "https://twitter.com/dpulseai"
    ],
    "description": "DPULSE AI PRIVATE LIMITED develops cutting-edge AI and robotics solutions across healthcare, engineering, space, and industrial operations.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "SHUBHAM APT., FLAT NO.6 B, SR. NO. 23, BANER, Baner Gaon, Haveli",
      "addressLocality": "Pune",
      "addressRegion": "Maharashtra",
      "postalCode": "411045",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 91 75 79 0779",
      "contactType": "customer service",
      "email": "info@dpulseai.com",
      "areaServed": "Global",
      "availableLanguage": "English"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
