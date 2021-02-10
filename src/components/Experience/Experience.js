import React from "react";
import "./Experience.css";

import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const Experience = () => {
  const history = useHistory();
  return (
    <div className="experience">
      <div className="experience__top">
        <h1>Online Experiences</h1>
        <Button onClick={() => history.push("/search")}>Explore all</Button>
      </div>

      <div className="experience__bottom">
        <div classname="experience__bottomLeft">
          <img
            className="left__img"
            src="https://a0.muscache.com/im/pictures/22f7dfe7-344e-4b55-88a0-3da9e0d45c97.jpg?im_q=medq&im_w=720"
            alt="left"
          />
          <h3 className="left__tag">
            make handsome pastas with italian grandmas
          </h3>
        </div>
        <div className="experience__bottomRight">
          <div className="experience__bottom-up">
            <div>
              <img
                className="right-left__img"
                src="https://a0.muscache.com/im/pictures/c4f98b13-4d9e-4376-b014-6b3e827c31d0.jpg?im_q=medq&im_w=320"
                alt="right-top-left"
              />
              <h5 className="right-left__tag">
                Practise mindful eating through Zen philosphy
              </h5>
            </div>
            <div>
              <img
                className="right-right__img"
                src="https://a0.muscache.com/im/pictures/572d1f80-e3dc-4e48-b54b-5c802090e881.jpg?im_q=medq&im_w=320"
                alt="right-top-left"
              />
              <h5 className="right-right__tag">
                Get to know Argentina's famous yerba Mate
              </h5>
            </div>
          </div>
          <div className="experience__bottom-down">
            <img
              className="right__img"
              src="https://a0.muscache.com/im/pictures/15c33e47-2301-43bf-8a3c-8c8aa1643aa9.jpg?im_q=medq&im_w=720"
              alt="right-bottom"
            />
            <h3 className="right__tag">
              meditate to music with a parisian concert pianist
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
