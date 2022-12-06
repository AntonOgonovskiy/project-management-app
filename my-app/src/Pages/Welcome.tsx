import { useSelector } from "react-redux";
import "./Pages.css";
import { lang } from "../types";
import { dict } from "../Dictionary/Dict";

const Welcome = () => {
  const lang = useSelector((state: lang) => state.lang.value);
  return (
    <div>
      <div className="sectionWrapper">
        <div className="imgWrapper">
          <img
            style={{ width: "100%" }}
            src="https://elements-cover-images-0.imgix.net/32423fd9-119c-40ca-bdf4-f6ec46f3683f?auto=compress%2Cformat&fit=max&w=433&s=4f8ef6cacdffcd2f0488bbdcb95cbab3"
            alt="Board"
          />
        </div>
        <p className="textWrapper">
          {dict[lang as keyof typeof dict].welcomeSect1}
        </p>
      </div>
      <div className="sectionWrapper">
        <p className="textWrapper">
          {dict[lang as keyof typeof dict].welcomeSect2}
        </p>
        <div className="imgWrapper">
          <img
            style={{ width: "100%", backgroundColor: "white" }}
            src="https://i.ytimg.com/vi/E-u7kMigsFk/maxresdefault.jpg"
            alt="Board"
          />
        </div>
      </div>
      <div className="sectionWrapper">
        <div className="imgWrapper">
          <a href="https://github.com/AntonOgonovskiy">
            <img
              style={{ width: "100%", backgroundColor: "white" }}
              src="https://desano.ru/uploads/catalog/1482/NS-10492-1.jpg"
              alt="Board"
            />
          </a>
        </div>
        <p className="textWrapper">
          {dict[lang as keyof typeof dict].welcomeSect3}
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Welcome;
