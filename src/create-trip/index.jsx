import GooglePlacesAutocomplete from "react-google-places-autocomplete";

function CreateTrip() {
  return (
    <>
      <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10 px-5 mt-10">
        <h2 className="font-bold text-3xl">Tell us your travel perferences</h2>
        <p className="mt-3 text-xl text-gray-500">
          Just provide some basic information, and our trip planner will
          generate a customized itinerary based on your perferences
        </p>

        <div className="mt-10">
          <div>
            <h2 className="text-xl font-medium">What is your destination?</h2>
            <GooglePlacesAutocomplete
            apiKey= {import.meta.env.VITE_GOOGLE_PLACES_API_KEY}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateTrip;
