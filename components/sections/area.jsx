import React, { useState } from 'react';
import AreaList from '../area-list';
import AreaInfo from '../area-info';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const AreaSection = (props) => {
  const [inProp, setInProp] = useState(false);
  const [clickedId, setClickedId] = useState(1);

  const handleClick = (areaId) => {
    // this.setState({ clickedId: areaId });
    setClickedId(areaId);
  };

  const setInProps = () => {
    setInProp(true);
  };

  return (
    <div className="area-wrapper" id="area-section">
      {/* Fazer um map do area-list-data.
			onde há um on-click, e em cada on-click
			é enviado o  para o parent */}
      <div id="area-container">
        <AreaList
          handleClick={handleClick}
          clickedId={clickedId}
          setInProps={setInProps}
        />
        <SwitchTransition>
          <CSSTransition
            key={clickedId}
            timeout={1000}
            appear={false}
            in={inProp}
            classNames="my-node"
          >
            <AreaInfo clickedId={clickedId} className="area-info-component" />
          </CSSTransition>
        </SwitchTransition>
      </div>
    </div>
  );
};

export default AreaSection;
