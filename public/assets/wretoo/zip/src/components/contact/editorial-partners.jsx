import React from "react";

const EditorialPartners = () => {
  return (
    <div class="bg-red-700 h-auto p-8 m-8 place-items-center">
      {/* first content block start*/}
      <div class="md:flex text-center text-white place-items-center p-12">
        <div class=" ">
          <h3 class=" font-bold text-xl">Editorial team</h3>
          <p class=" p-3 m-6">
            For editorial enquiries, corrections, or content submission contact
            our editorial team
          </p>
          <a
            class="block  font-bold mx-auto text-xl underline wrap-anywhere"
            href="#"
          >
            editorial@nexusnews.com
          </a>
        </div>
        {/* first content block ends */}

        {/* separator */}
        <div class="my-6 h-1 bg-white w-full md:w-0.5 md:h-50 md:my-0 md:mx-6"></div>

        {/* second content block start*/}
        <div>
          <h1 class=" font-bold text-xl">Advertising & partnerships</h1>
          <p class=" p-3 m-6">
            interested in advertising with us or exploring partnershop
            oppurtunities?
          </p>
          <a
            class="block  font-bold mx-auto text-xl underline wrap-anywhere"
            href="#"
          >
            ads@nexusnews.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default EditorialPartners;
