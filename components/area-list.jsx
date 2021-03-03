import React, { Component } from 'react';
import AreaData from '../static/data/area-data';

class AreaList extends Component {
  render() {
    const { handleClick, clickedId } = this.props;
    const areaList = AreaData.map((area) => {
      return (
        <li
          key={area.id}
          className={
            area.id === clickedId ? 'area-item active-area' : 'area-item'
          }
          onClick={() => {
            handleClick(area.id);
          }}
        >
          {area.name}
        </li>
      );
    });

    return (
      <div id="area-left-container">
        <h1 id="area-list-title">Freguesias de Lisboa</h1>
        <div id="area-list-container">
          {/* Fazer um map do area-list-data.
			onde há um on-click, e em cada on-click
			é enviado o  para o parent */}
          <ul id="area-list">{areaList}</ul>
        </div>
      </div>
    );
  }
}

export default AreaList;
