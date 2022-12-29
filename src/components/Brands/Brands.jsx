import google from "../../assets/images/google.png";
import slack from "../../assets/images/slack.png";
import atlassian from "../../assets/images/atlassian.png";
import dropbox from "../../assets/images/dropbox.png";
import shopify from "../../assets/images/shopify.png";

const Introduction = () => {
  return (
    <div className="mx-auto my-16 max-w-[44.6875rem] py-8">
      <h2 className="sr-only">Brands</h2>
      <ul className="flex flex-wrap items-center justify-center gap-[2.875rem] ">
        <li>
          <img src={google} width="71" height="24" alt="google" />
        </li>
        <li>
          <img src={slack} width="95" height="24" alt="slack" />
        </li>
        <li>
          <img src={atlassian} width="112" height="24" alt="atlassian" />
        </li>
        <li>
          <img src={dropbox} width="120" height="24" alt="dropbox" />
        </li>
        <li>
          <img src={shopify} width="120" height="24" alt="shopify" />
        </li>
      </ul>
    </div>
  );
};

export default Introduction;
