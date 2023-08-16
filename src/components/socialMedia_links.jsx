import React from "react";
import Facebook from "../../src/assets/icons/fb";
import Instagram from "../../src/assets/icons/insta";
import Tweet from "../../src/assets/icons/Group";
import LinkedIn from "../../src/assets/icons/linkedin";

const SocialMediaLinks = () => {
  return (
    <div className="copyright">
      <div className="copyright__icon">
        <div>
          <Facebook />
        </div>
        <div>
          <Instagram />
        </div>
        <div>
          <Tweet />
        </div>
        <div>
          <LinkedIn />
        </div>
      </div>
      <div className="copyright__reserve">
        Copyright ©2020 All rights reserved
      </div>
    </div>
  );
};

export default SocialMediaLinks;
