const dummyRestaurantDetail = {
    "@context": "http://schema.org",
    "@type": "Restaurant",
    "@id": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-dr-rajkumar-road-rajajinagar-bangalore-82504",
    "name": "UBQ by Barbeque Nation",
    "image": "https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/mpxqoksbeig38xs1wkgm",
    "servesCuisine": "North Indian, Barbecue",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dr Rajkumar Road",
        "addressLocality": "Rajajinagar",
        "addressRegion": "Bangalore",
        "addressCountry": "IN",
        "postalCode": ""
    }, "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "3.8",
        "ratingCount": "5000"
    }, "priceRange": "₹300 for two", "geo": {
        "@type": "GeoCoordinates",
        "latitude": 12.9828839,
        "longitude": 77.55994370000008
    },
    "potentialAction": {
        "@type": "OrderAction",
        "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-dr-rajkumar-road-rajajinagar-bangalore-82504?utm_source=google&utm_medium=place_action",
            "inLanguage": "en-US",
            "actionPlatform": [
                "http://schema.org/DesktopWebPlatform"
            ]
        },
        "deliveryMethod": [
            "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet"
        ],
        "priceSpecification": [{
            "@type": "DeliveryChargeSpecification",
            "appliesToDeliveryMethod": "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet",
            "priceCurrency": "INR",
            "price": 30.0,
            "eligibleTransactionVolume": {
                "@type": "PriceSpecification",
                "priceCurrency": "INR",
                "price": 0.0
            }
        }, {
            "@type": "DeliveryChargeSpecification",
            "appliesToDeliveryMethod": "http://purl.org/goodrelations/v1#DeliveryModeOwnFleet",
            "priceCurrency": "INR",
            "price": 0.0,
            "eligibleTransactionVolume": {
                "@type": "PriceSpecification",
                "priceCurrency": "INR",
                "price": 150.0
            }
        }]
    }
}

module.exports = dummyRestaurantDetail;