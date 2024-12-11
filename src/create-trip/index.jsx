import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SelectBudgetOptions, SelectTravelesList } from "@/constants/options";
import { useEffect, useState } from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { toast } from "sonner";

function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState([]);

  const handleInputChange = (name,value)=>{

    setFormData({
      ...formData,
      [name]:value
    })
  }

  useEffect(() => {
    console.log(formData)
  },[formData])

  const OnGenerateTrip = () => {
    if (formData.noofDays>5 && !formData?.location || !formData.budget || !formData?.travelers) {
      toast("Please fill all the details")
      return;
    }

    console.log(formData)
  }

  return (
    <>
      <div className="sm:px-10 md:px-32 lg:px-56 xl:px-10  m-10">
        <h2 className="font-bold text-3xl">Tell us your travel perferences 🛖🏕️🏝️</h2>
        <p className="mt-3 text-xl text-gray-500">
          Just provide some basic information, and our trip planner will
          generate a customized itinerary based on your perferences
        </p>

        <div className="mt-10 flex flex-col gap-3">
          <div>
            <h2 className="text-xl my-3 font-medium">
              What is your destination?
            </h2>
            <GooglePlacesAutocomplete
              apiKey={import.meta.env.VITE_GOOGLE_PLACES_API_KEY}
              selectProps={{
                place,
                onChange: (v) => {
                  setPlace(v);
                  handleInputChange('location',v)
                },
              }}
            />
          </div>

          <div >
            <h2 className="text-xl my-3 font-medium">
              How many days are you planning your trip?
            </h2>
            <Input placeholder={"Ex.2 Maximum of 5"} type="number" 
              onChange={(e) => handleInputChange('noofDays',e.target.value)}
            />
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-xl my-3 font-medium">What is Your Budget?</h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectBudgetOptions.map((item, index) => (
              <>
                <div
                  key={index}
                  onClick={() => handleInputChange('budget',item.title)}
                  className={`p-4 cursor-pointer border rounded-lg
                    hover:shadow-lg
                    ${formData?.budget == item.title && 'shadow-md border-black'}`}
                >
                  <h2 className="text-4xl">{item.icon}</h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <h2 className="text-sm text-gray-500">{item.desc}</h2>
                </div>
              </>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <h2 className="text-xl my-3 font-medium">
            Who do you plan on traveling with on your next adventure?
          </h2>
          <div className="grid grid-cols-3 gap-5 mt-5">
            {SelectTravelesList.map((item, index) => (
              <>
                <div
                  key={index}
                  onClick={() => handleInputChange('travelers',item.people)}
                  className={`p-4 cursor-pointer border rounded-lg
                    hover:shadow-lg
                    ${formData?.travelers == item.people && 'shadow-md border-black'}`}
                >
                  <h2 className="text-4xl">{item.icon}</h2>
                  <h2 className="font-bold text-lg">{item.title}</h2>
                  <h2 className="text-sm text-gray-500">{item.desc}</h2>
                </div>
              </>
            ))}
          </div>
        </div>

        <div className="mt-10 justify-end flex ">
          <Button onClick={OnGenerateTrip}>Generate trip</Button>
        </div>
      </div>
    </>
  );
}

export default CreateTrip;
