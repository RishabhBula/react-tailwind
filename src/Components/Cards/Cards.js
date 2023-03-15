import React from "react";

const Cards = () => {
  const team = [{
    title: "John",
    teamImg: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    teamCount: "01",

  },
  {
    title: "smith",
    teamImg: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    teamCount: "02",
  }, {
    title: "Devid",
    teamImg: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    teamCount: "03",
  }
    , {
    title: "sara",
    teamImg: "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    teamCount: "04",
  }

  ]

  return (
    <>
      <div className="py-20 max-mobile:flex-col flex text-center justify-center overflow-hidden gap-5">
        {team.map((teams, i) =>
          <div key={i} className="flex flex-col items-center  gap-2">
            <img
              className="inline-block h-20 w-20 rounded ring-2 ring-white"
              src={teams.teamImg}
              alt=""
            />
            <div className="text-base">
              <h4 className="font-semibold text-slate-900">{teams.title}</h4>
              <span className="rounded-full bg-slate-100  py-1 text-xs font-semibold text-gold">
                {teams.teamCount}
              </span>
            </div>
          </div>
        )}
        {/* <div className="flex  items-center  gap-2">
          <img
            className="inline-block h-20 w-20 rounded ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="text-base">
            <h4 className="font-semibold text-slate-900">title</h4>
            <span className="rounded-full bg-slate-100  py-1 text-xs font-semibold text-gold">
              01
            </span>
          </div>
        </div>
        <div className="flex items-center  gap-2">
          <img
            className="inline-block h-20 w-20 rounded ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="  text-base">
            <h4 className="font-semibold text-slate-900">title</h4>
            <span className="rounded-full bg-slate-100  py-1 text-xs font-semibold text-gold">
              02
            </span>
          </div>
        </div>
        <div className="flex items-center  gap-2">
          <img
            className="inline-block h-20 w-20 rounded ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className=" text-base">
            <h4 className="font-semibold text-slate-900">title</h4>
            <span className="rounded-full bg-slate-100  py-1 text-xs font-semibold text-gold">
              03
            </span>
          </div>
        </div>
        <div className="flex items-center  gap-2">
          <img
            className="inline-block h-20 w-20 rounded ring-2 ring-white"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <div className="text-base">
            <h4 className="font-semibold text-slate-900">title</h4>
            <div className="rounded-full bg-slate-100  py-1 text-xs font-semibold text-gold">
              04
            </div>
          </div>
        </div> */}


      </div>
      {/* {data?.map((datas, i) => (
        <div key={i}>
          <h2>{datas.id}</h2>
          <h2>{datas.title}</h2>
        </div>
      ))} */}
    </>
  );
};

export default Cards;
