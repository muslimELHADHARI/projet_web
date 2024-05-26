import React from 'react';

const ArticleCard = ({ image, title, description, author, date, readTime }) => {
  return (
    <div className="card border-0 mb-4 box-shadow h-xl-300">
      <div style={{backgroundImage: `url(${image})`, height: '150px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}></div>
      <div className="card-body px-0 pb-0 d-flex flex-column align-items-start">
        <h2 className="h4 font-weight-bold">
          <a className="text-dark" href="./article.html">{title}</a>
        </h2>
        <p className="card-text">{description}</p>
        <div>
          <small className="d-block"><a className="text-muted" href="./author.html">{author}</a></small>
          <small className="text-muted">{date} &middot; {readTime}</small>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
