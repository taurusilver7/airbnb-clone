import React from "react";
import "./SearchPage.css";

import { Button } from "@material-ui/core";
import SearchResult from "../SearchResult/SearchResult";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 stays. 02 March to 30 May. 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of Place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Instant Book</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://a0.muscache.com/im/pictures/d8b8cfab-b3a7-4600-a8cf-31e4bd83edb6.jpg?im_w=960"
        title="Entire guest suite hosted by Ramnath"
        star="4.92"
        location="Bengaluru, Karnataka, India"
        price="₹2,500/ night"
        total="₹6,306"
        description="Nature's Nest premium is tucked in the midst of greenery surrounded by a private forest, sitting in the heart of Bangalore (Wilson Garden), walking distance to Forum Mall, Koramangala. Fully equipped with all the modern amenities.
To the nature lovers delight."
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/2d61b351-2e2c-4913-8593-b79ffb7cb81c.jpg?im_w=960"
        title="Entire house hosted by One Tree Hospitality"
        star="4.17"
        location="New Delhi, Delhi, India"
        price="₹2,290/ night"
        total="₹5,480"
        description="An independent Modern & Cozy studio with private Patio located in the ♡of Southdelhi (Close to SDA Market). Area is PACKED full of cafe's, bars, & beautiful parks. WIFI & Satellite TV."
      />

      <SearchResult
        img="https://a0.muscache.com/im/pictures/39900d9e-48a5-4938-ad25-046e76f305b0.jpg?im_w=960"
        location="Mapusa, Goa, India"
        title="Brand new apartment with large terrace - Siolim"
        star="4.5"
        description="Our brand new apartment is located in Siolim, close to the famous towns & beaches of Anjuna & Morjim. It can accommodate 6 guests and is perfect for a family: it has a fully functional kitchen with dining area, 2 bedrooms and terrace. As part of the gated community, we provide 24h security, housekeeping once a day, a pool house and an outdoor swimming pool (temporarily closed due to COVID regulations)."
        price="₹8,296/ night"
        total="₹8,560"
      />

      <SearchResult
        img="https://a0.muscache.com/im/pictures/193ca773-899f-482f-9dc8-cdef454c42ad.jpg?im_w=960"
        location="Shimla, Himachal Pradesh, India"
        title="Frosty Sun Bathing on Top of a Private Hill 🌞"
        star="4.0"
        description="Soak up the Modern yet Vintage charm of our cottage with a serene Forest as your Backyard. Enjoy Bonfires in the Front Lawns with the paranomic views of the valley or Have a BBQ at our magnificent terrace, with magical sunset views. Spread Across Four Floors, our spacious villa comes with a magnificent attic which opens up into the terrace and a manicured Front Lawn and Forest Backyard"
        price="₹6,429/ night"
        total="₹6,850"
      />
      <SearchResult
        img="https://a0.muscache.com/im/pictures/281506a6-d5d4-4e76-a811-4a7a2ea5ac17.jpg?im_w=960"
        location="Dali, Yunnan, China"
        title="270 degree sea view big bed room · home theater · fruit and red wine for the first night."
        star="4.93"
        price="₹7,790/ night"
        total="₹7,940"
        description="On the east coastline of Erhai Lake, opposite to Little Putuo, 10 meters away from Erhai Lake. ①The sunset is super beautiful, the sunset is directly opposite the inn. ②Seagull gathering place in winter ③Sea view room, watch the sunset, and be in a daze with the sea breeze. ④There is a water bar on the first floor, where you can have coffee, freshly squeezed, and tea. ①The bus station is across the street from the train station to the train station, with a direct shuttle bus , or book hotel pick-up service in advance. ②Airport-Didi travel, or book hotel pick-up service in advance."
      />
    </div>
  );
};

export default SearchPage;
