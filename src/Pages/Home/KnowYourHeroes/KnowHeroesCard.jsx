
const KnowHeroesCard = ({actionFigure}) => {
    return (
        <div className="card w-96 bg-indigo-100 text-slate-800 shadow-xl hover:bg-teal-200 hover:-translate-y-2">
        <div className="card-body">
          <h2 className="card-title">{actionFigure.name}</h2>
          <p>{actionFigure.details}</p>
          
        </div>
      </div>
    );
};

export default KnowHeroesCard;