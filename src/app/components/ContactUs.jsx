import {
  LetterText,
  Locate,
  Mail,
  Map,
  MapPin,
  Phone,
  Pointer,
  Text,
} from "lucide-react";
import React from "react";

const ContactUs = () => {
  return (
    <div className="flex lg:w-[85vw] w-[95vw] flex-col mx-auto my-5">
      <h1 className="text-brand-secondary text-center lg:text-3xl text-2xl font-bold">
        Contact Us
      </h1>
      <div className="flex lg:flex-row flex-col items-center mt-10 justify-between lg:space-x-4">
        <div className="bg-brand-lgInp lg:h-56 h-64 lg:w-[48vw] w-full p-4 flex flex-col justify-center rounded-lg">
          <div className="flex items-center">
            <Phone className="text-brand-primary" />
            <h3 className="text-xl mx-2 font-bold text-brand-secondary">
              Head Office
            </h3>
          </div>
          <p className=" text-xl text-brand-secondary mt-2">0213-5877976</p>
          <div className="flex items-center mt-5">
            <MapPin className="text-brand-primary" />
            <h3 className="text-xl font-bold mx-2 text-brand-secondary">
              Location
            </h3>
          </div>
          <p className=" text-lg text-brand-secondary mt-2">
            Ocean Tower, 20th Floor, G-3, Block -9, Scheme 5, Main Clifton Road,
            Karachi, Pakistan
          </p>
        </div>
        <div className="bg-brand-lgInp lg:h-56 lg:w-[48vw] mt-5 lg:mt-0 h-64 w-full p-4 flex flex-col justify-center rounded-lg">
          <div className="flex items-center">
            <Phone className="text-brand-primary" />
            <h3 className="text-xl font-bold mx-2 text-brand-secondary">
              Regional Office Lahore
            </h3>
          </div>
          <p className=" text-xl text-brand-secondary mt-2">042-35884570</p>
          <div className="flex items-center mt-5">
            <MapPin className="text-brand-primary" />
            <h3 className="text-xl font-bold mx-2 text-brand-secondary">
              Location
            </h3>
          </div>
          <p className=" text-lg mt-2 text-brand-secondary">
            27-A Ali Block New Garden Town Opposite Barkat Market Lahore
          </p>
        </div>
        <div className="bg-brand-lgInp justify-center mt-5 lg:mt-0 lg:h-56 h-64 lg:w-[48vw] w-full p-4 flex flex-col rounded-lg">
          <div className="flex items-center ">
            <Phone className="text-brand-primary" />
            <h3 className="text-xl mx-2  font-bold text-brand-secondary">
              Regional Office Islamabad
            </h3>
          </div>
          <p className=" text-xl text-brand-secondary  mt-2">0512726877</p>
          <div className="flex items-center mt-5">
            <MapPin className="text-brand-primary" />
            <h3 className="text-xl mx-2 font-bold text-brand-secondary">
              Location
            </h3>
          </div>
          <p className=" text-lg mt-2 text-brand-secondary">
            United Bakery Building, 11، School Rd, F-6 Markaz F-6, Islamabad,
            Islamabad Capital Territory 44000
          </p>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col items-center mt-5 lg:space-x-4 justify-between mx-auto">
        <div className="bg-brand-lgInp p-4 lg:w-[42vw] w-[95vw] flex flex-col justify-center rounded-lg">
          <div className="flex items-center">
            <Phone className="text-brand-primary" />
            <h3 className="text-xl font-bold mx-2 text-brand-secondary">
              Helpline
            </h3>
          </div>
          <p className="text-lg text-brand-secondary">UAN: 111 532 532</p>
        </div>
        <div className="bg-brand-lgInp p-4 lg:w-[42vw] mt-5 lg:mt-0 w-[95vw] flex flex-col justify-center rounded-lg">
          <div className="flex items-center">
            <Mail className="text-brand-primary" />
            <h3 className="text-xl font-bold mx-2 text-brand-secondary">
              Complaints Email
            </h3>
          </div>
          <p className="text-lg text-brand-secondary">
            customercare@kfcpakistan.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
