import React from "react";
import "./Filter.css";

const Filter = ({ Group, Level, filterGame }) => {
  const handleChange = (e) => {
    filterGame(e.target.value);
  };
  return (
    <section>
      <div className="filter-container">
        <div>
          <p>Filter By Groups</p>
          <div className="filter-wrapper">
            {Group.map((group, i) => {
              return (
                <div className="filter-items" key={i}>
                  <label>{group}</label>
                  <input
                    onChange={handleChange}
                    type="checkbox"
                    value={group}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <p>Filter By Levels</p>
          <div className="filter-wrapper">
            {Level.filter((lev) => lev !== "Financial Literacy").map(
              (level, i) => {
                return (
                  <div className="filter-items" key={i}>
                    <label>{level}</label>
                    <input
                      onChange={handleChange}
                      type="checkbox"
                      value={level}
                    />
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;
