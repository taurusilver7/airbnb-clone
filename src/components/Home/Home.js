import React from "react";
import "./Home.css";

import Banner from "../Banner/Banner";
import Card from "../Card/Card";

const Home = () => {
  return (
    <div className="home">
      <Banner />

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/3d0612a5-b03d-4a29-8abe-7da6fe710aa3.jpg?im_w=480"
          title="Private room in cute loft apartment (ladies only)"
          description="Hi, It's a cozy loft space in the middle of Colaba Market, with a view of the ocean from the window. The apartment is close to Gateway of India, Taj Hotel, Causeway Market and both Churchgate & VT stations. It's a bustling location with all the cafes, galleries and parks nearby."
        />

        <Card
          src="https://a0.muscache.com/im/pictures/39ee011b-8b61-4fa5-bdbd-9c2b4724ec94.jpg?im_w=1200"
          title="Beach Bungalow Near Mangalore Udupi Highway"
          description="A peaceful place, where you can enjoy, relax and have fun. The bungalow is surrounded by coconut trees and the beach is just a minute away. You would have the entire first floor to yourself. It is the perfect place to lay back, read a book or simply chill with friends and family. The bungalow is at an amazing location"
        />
      </div>

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/a17609e2-d762-4365-a313-62e619e59872.jpg?im_w=480"
          title="Homes"
          description="Comfortable places with all essentials"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/f20dbdb1-05b5-4f01-97ba-b113edc20795.jpg?im_w=480"
          title="Hotels"
          description="Stylish accomodations and amenties"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/62d0e70e-7107-4d1b-beb5-21f0ad2bb811.jpg?im_w=480"
          title="Unique stays"
          description="Spaces that are more than a place just to sleep"
        />
      </div>

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/b38e7e93-27d6-4393-acf9-8390972871fa.jpg?im_w=960"
          title="Private room in guest house hosted by Poseidon"
          description="Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests. The host doesn’t allow pets or smoking"
          price="₹745/ night"
        />

        <Card
          src="https://a0.muscache.com/im/pictures/681bd3c1-7e6b-4c5b-8333-5288f9b7bc5b.jpg?im_w=960"
          title=" 1BHK CANDOLIM / CALANGUTE STAWIL APARTMENTS"
          description="You’ll have the condominium to yourself. 100% of recent guests gave the location a 5-star rating. This place isn’t suitable for children under 12 and the host doesn’t allow pets or parties."
          price="₹1,299/ night"
        />

        <Card
          src="https://a0.muscache.com/im/pictures/e9020461-e533-4dd1-bc01-e1b381f903af.jpg?im_w=960"
          title="Entire flat hosted by Vishal"
          description="You’ll have the apartment to yourself. Add your trip dates to get the cancellation details for this stay. The host doesn’t allow pets or parties."
          price="₹2,000/ night"
        />
      </div>

      <div className="home__section">
        <Card
          src="https://a0.muscache.com/im/pictures/1562bea6-25b1-46af-af53-054f540ed7f6.jpg?im_w=720"
          title="Entire cottage hosted by Gitane"
          description="Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests. This place isn’t suitable for children under 12 and the host doesn’t allow pets or parties."
          price="₹2,186/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/f0ea4cba-c771-41b6-92c5-caa646edb513.jpg?im_w=960"
          title="Entire cottage hosted by Daleep"
          description="Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests. Add your trip dates to get the cancellation details for this stay."
          price="₹5,999/ night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/11008e39-4375-4bc7-83dd-05e319f33192.jpg?im_w=960"
          title="Entire flat hosted by Vandana"
          description="This host committed to Airbnb's 5-step enhanced cleaning process. This host doesn’t allow smoking."
          price="₹1,450/ night"
        />
      </div>
    </div>
  );
};

export default Home;
