/* eslint-disable no-console */
import React, { useContext } from 'react';
import NftItem from '../NftItem';
import { appStore } from '../../state/app';

const NftList = () => {
  const { state, update } = useContext(appStore);
  const { app } = state;

  const handleClick = (revealNearkats) => {
    const newRevealNearkats = { ...app.revealNearkats, ...revealNearkats };

    update('app', { revealNearkats: newRevealNearkats });
    localStorage.setItem('revealNearkats', JSON.stringify(newRevealNearkats));
  };

  return (
    <div className="nfts-list">
      {app.nearkatsArray.map((item) => (
        <NftItem
          key={item.token_id}
          item={item.metadata}
          isHide={app.revealNearkats[item.token_id]}
          onClick={handleClick}
        />
      ))}
    </div>
  );
};

export default NftList;
