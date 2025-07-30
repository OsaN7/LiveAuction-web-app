import React, { useState } from 'react';
import './LiveAuction.css';

const LiveAuction = () => {
  const MIN_BID = 250; // Minimum allowed bid
  const [bid, setBid] = useState(MIN_BID); // Initial bid

  const increaseBid = () => setBid(bid + 10);

  const decreaseBid = () => {
    if (bid > MIN_BID) setBid(bid - 10);
  };

  return (
    <div className="auction-container">
      <img
        src="/Wooden.jpg"
        alt="Auction Item"
        className="auction-image"
      />
      <div className="auction-content">
        <div className="auction-title">Antique Wooden Clock</div>
        <div className="auction-description">
          This beautiful handcrafted wooden clock is from the early 1900s. With
          intricate carvings and classic design, it's a timeless piece for
          collectors and enthusiasts.
        </div>
        <div className="auction-details">
          <div className="current-bid">
            Current Bid: ${bid}
            <div className="bid-controls">
              <button onClick={increaseBid}>▲</button>
              <button onClick={decreaseBid} disabled={bid === MIN_BID}>▼</button>
            </div>
          </div>
          <button className="bid-button">Place Higher Bid</button>
        </div>
      </div>
    </div>
  );
};

export default LiveAuction;
