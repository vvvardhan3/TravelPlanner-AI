export const SelectTravelesList = [
  {
    id: 1,
    title: "Just Me",
    desc: "A sole traveles in exploration",
    icon: "🛩️",
    people: "1",
  },
  {
    id: 2,
    title: "A Couple",
    desc: "Two traveles in tandem",
    icon: "🥂",
    people: "2",
  },
  {
    id: 3,
    title: "Family",
    desc: "A group of fun loving adventure",
    icon: "🏠",
    people: "3 to 5 people",
  },
  {
    id: 4,
    title: "Friends",
    desc: "A bunch of thrill-seekers",
    icon: "⛵",
    people: "5 to 10 people",
  },
];

export const SelectBudgetOptions = [
  {
    id: 1,
    title: "Cheap",
    desc: "Stay conscious of costs",
    icon: "💵",
  },
  {
    id: 2,
    title: "Moderate",
    desc: "Keep cost on the average side",
    icon: "💰",
  },
  {
    id: 3,
    title: "Luxury",
    desc: "Dont worry about cost",
    icon: "💎",
  },
];

export const AI_PROMPT =
  "Generate Travel plan for Location: {location}, for {totalDays} Days for {traveler} with a {budget} Budget, Give me Hotel options List with HotelName, Hotel Address, Price, Hotel Image URL, Geo coordinates, Rating, Descriptions and Suggest itinerary with PlaceName, Place Details, Place Image URL, Geo Coordinates, Ticket Pricing, Rating, Time Travel each of the location for {totalDays} Days with each day plan with best time to visit in JSON format.";
