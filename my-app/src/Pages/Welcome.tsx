import "./Pages.css";

const Welcome = () => {
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
          "Kanban" is the Japanese word for "visual signal." If you work in
          services or technology, your work is often times invisible and
          intangible. A kanban board helps make your work visible so you can
          show it to others and keep everyone on the same page.
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Welcome;
