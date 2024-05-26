import React from 'react';

const PopularList = () => {
  return (
    <ol className="list-featured">
      <li>
        <span>
          <h6 className="font-weight-bold"><a href="./article.html" className="text-dark">Did Supernovae Kill Off Large Ocean Animals?</a></h6>
          <p className="text-muted">Jake Bittle in SCIENCE</p>
        </span>
      </li>
      <li>
        <span>
          <h6 className="font-weight-bold"><a href="./article.html" className="text-dark">Humans Reversing Climate Clock: 50 Million Years</a></h6>
          <p className="text-muted">Jake Bittle in SCIENCE</p>
        </span>
      </li>
      <li>
        <span>
          <h6 className="font-weight-bold"><a href="./article.html" className="text-dark">Unprecedented Views of the Birth of Planets</a></h6>
          <p className="text-muted">Jake Bittle in SCIENCE</p>
        </span>
      </li>
      <li>
        <span>
          <h6 className="font-weight-bold"><a href="./article.html" className="text-dark">Effective New Target for Mood-Boosting Brain Stimulation Found</a></h6>
          <p className="text-muted">Jake Bittle in SCIENCE</p>
        </span>
      </li>
    </ol>
  );
};

export default PopularList;
