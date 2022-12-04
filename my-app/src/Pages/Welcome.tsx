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
      <div className="sectionWrapper">
        <p className="textWrapper">
          RS School is free-of-charge and community-based education program
          conducted by The Rolling Scopes developer community since 2013.
          Everyone can study at RS School, regardless of age, professional
          employment, or place of residence. The mentors and trainers of our
          school are front-end and javascript developers from different
          companies and countries.
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
          About me: My name is Anton.I have been studying at RSSchool for about
          a year. Completed courses "JS / FRONT-END. STAGE 0", "JS / FRONT-END".
          When doing the final task on react, I used TypeScript, hooks,
          react-dom, mui UI tools. Carrying out this project alone,
          unfortunately, I did not have time to implement all the necessary
          features. But I will finish this task, since the main goal is to learn
          and understand
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Welcome;
