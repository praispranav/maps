const googleMapsConfig = [
    {
        featureType: "administrative.country",
        elementType: "all",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "administrative.province",
        elementType: "all",
        stylers: [{ visibility: "on" }],
      },
      {
        featureType: "administrative.locality",
        elementType: "all",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "administrative.neighborhood",
        elementType: "all",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "all",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [{ visibility: "on" }],
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "poi.park",
        elementType: "all",
        stylers: [{ visibility: "on" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels",
        stylers: [{ visibility: "off" }],
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [{ visibility: "on" }],
      },
]

export default googleMapsConfig