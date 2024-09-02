/**
<ContentContainer
  title:""
  data:{[]}
/>
 */

import { useEffect, useState } from "react";
import FormatDate from "../FormatDate";
import Picture from "../Picture";
import TitleLink from "../TitleLink";
import Material from "../Material";
import Description from "../Description";
import Tech from "../Tech";

const ContentContainer = ({
  onInitial,

  title: sectionTitle = "",
  data = [],
}) => {
  const [isMouseEnter, setIsMouseEnter] = useState({});

  const SECTION_ID = `${sectionTitle}-section`;

  useEffect(() => {
    onInitial(SECTION_ID);
  }, []);

  return (
    <div id={SECTION_ID} className="scroll-m-14">
      <div className="text-primaryTitle font-medium px-2">{sectionTitle}</div>
      {data.map(
        (
          { date, title, link, material, description, skills, picture },
          index
        ) => (
          <div
            key={`${SECTION_ID}-${index}-${title.replaceAll(" ", "")}`}
            className={`grid grid-cols-[25%_75%] rounded-xl px-2 py-6 transition-all ${
              isMouseEnter[`${SECTION_ID}-${index}`] ? "bg-primaryBg" : ""
            }`}
            onMouseEnter={() =>
              setIsMouseEnter({ [`${SECTION_ID}-${index}`]: true })
            }
            onMouseLeave={() =>
              setIsMouseEnter({ [`${SECTION_ID}-${index}`]: false })
            }
          >
            <div>
              <FormatDate isHightLight={isMouseEnter[`${SECTION_ID}-${index}`]}>
                {date}
              </FormatDate>
              <Picture picture={picture} title={title} />
            </div>
            <div className="grid gap-y-4">
              <TitleLink
                isHightLight={isMouseEnter[`${SECTION_ID}-${index}`]}
                title={title}
                link={link}
              />
              {material.length > 0 ? (
                <div className="flex gap-4 text-xl items-center">
                  {material.map((e, i) => (
                    <Material
                      key={`${e.icon}-material-${i}`}
                      icon={e.type}
                      link={e.link}
                    />
                  ))}
                </div>
              ) : null}

              {description.map((e, i) => (
                <Description key={`${e}-description-${i}`} description={e} />
              ))}
              {skills.map((e, i) => (
                <Tech
                  key={`${e}-skills-${i}`}
                  isHightLight={isMouseEnter[`${SECTION_ID}-${index}`]}
                  data={e}
                />
              ))}
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default ContentContainer;
