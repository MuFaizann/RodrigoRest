export function JsonLd() {
  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Rodrigos Taco Shop",
    image: [
      "https://rodrigostacoshop.com/restaurant-exterior.jpg",
      "https://rodrigostacoshop.com/restaurant-interior.jpg",
      "https://rodrigostacoshop.com/food-spread.jpg",
    ],
    description:
      "Authentic Mexican taco shop serving traditional tacos, burritos, and Mexican cuisine made with fresh ingredients.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1956 S Garnett Rd",
      addressLocality: "Tulsa",
      addressRegion: "OK",
      postalCode: "74128",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "36.1314",
      longitude: "-95.8911",
    },
    url: "https://rodrigostacoshop.com",
    telephone: "+19186055061",
    servesCuisine: ["Mexican", "Tacos"],
    priceRange: "$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "07:00",
        closes: "00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "07:00",
        closes: "00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "07:00",
        closes: "02:00",
      },
    ],
    menu: "https://rodrigostacoshop.com/menu",
    acceptsReservations: false,
    hasDeliveryService: {
      "@type": "DeliveryService",
      name: "Third-party delivery",
      provider: [
        {
          "@type": "Organization",
          name: "DoorDash",
        },
        {
          "@type": "Organization",
          name: "UberEats",
        },
        {
          "@type": "Organization",
          name: "Postmates",
        },
        {
          "@type": "Organization",
          name: "Caviar",
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.6",
      reviewCount: "89",
    },
    paymentAccepted: "Cash, Credit Card, Debit Card",
    currenciesAccepted: "USD",
  }

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rodrigos Taco Shop",
    url: "https://rodrigostacoshop.com",
    logo: "https://rodrigostacoshop.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+19186055061",
      contactType: "customer service",
      availableLanguage: ["English", "Spanish"],
    },
    sameAs: [
      "https://www.facebook.com/RodrigosTacoShop",
      "https://www.instagram.com/rodrigostacos",
      "https://www.yelp.com/biz/rodrigos-taco-shop-tulsa",
    ],
  }

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Rodrigos Taco Shop",
    image: "https://rodrigostacoshop.com/restaurant-front.jpg",
    telephone: "+19186055061",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1956 S Garnett Rd",
      addressLocality: "Tulsa",
      addressRegion: "OK",
      postalCode: "74128",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "36.1314",
      longitude: "-95.8911",
    },
    url: "https://rodrigostacoshop.com",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "07:00",
        closes: "00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        opens: "07:00",
        closes: "00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "07:00",
        closes: "02:00",
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
    </>
  )
}
