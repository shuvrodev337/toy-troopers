import { useEffect, useState } from "react";
import KnowHeroesCard from "./KnowHeroesCard";

const KnowYourHeroes = () => {
  const [actionFigures, setActionFigures] = useState([]);
  useEffect(() => {
    fetch(`https://toy-troopers-server.vercel.app/actionFigures`)
      .then((res) => res.json())
      .then((data) => setActionFigures(data));
  }, []);
  return (
    <div className="my-28">
      <div className="my-14 ">
        <h1 className="text-5xl text-teal-400 font font-bold text-center">
          Know About {actionFigures.length} types of Action Figures First!
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {actionFigures.map((actionFigure) => (
          <KnowHeroesCard
            key={actionFigure._id}
            actionFigure={actionFigure}
          ></KnowHeroesCard>
        ))}
      </div>

      
    </div>
  );
};

export default KnowYourHeroes;
