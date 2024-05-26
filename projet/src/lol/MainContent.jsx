import React from 'react';
import ArticleCard from './ArticleCard';
import PopularList from './PopularList';

const MainContent = () => {
  return (
    <div className="container pt-4 pb-4">
      <div className="row">
        <div className="col-lg-6">
          <ArticleCard 
            image="./assets/img/demo/1.jpg" 
            title="Brain Stimulation Relieves Depression Symptoms" 
            description="Researchers have found an effective target in the brain for electrical stimulation to improve mood in people suffering from depression."
            author="Favid Rick"
            date="Dec 12"
            readTime="5 min read"
          />
        </div>
        <div className="col-lg-6">
          <div className="flex-md-row mb-4 box-shadow h-xl-300">
            <div className="mb-3 d-flex align-items-center">
              <img height="80" src="./assets/img/demo/blog4.jpg" alt="blog4" />
              <div className="pl-3">
                <h2 className="mb-2 h6 font-weight-bold"><a className="text-dark" href="./article.html">Nasa's IceSat space laser makes height maps of Earth</a></h2>
                <div className="card-text text-muted small">Jake Bittle in LOVE/HATE</div>
                <small className="text-muted">Dec 12 · 5 min read</small>
              </div>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <img height="80" src="./assets/img/demo/blog5.jpg" alt="blog5" />
              <div className="pl-3">
                <h2 className="mb-2 h6 font-weight-bold"><a className="text-dark" href="./article.html">Underwater museum brings hope to Lake Titicaca</a></h2>
                <div className="card-text text-muted small">Jake Bittle in LOVE/HATE</div>
                <small className="text-muted">Dec 12 · 5 min read</small>
              </div>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <img height="80" src="./assets/img/demo/blog6.jpg" alt="blog6" />
              <div className="pl-3">
                <h2 className="mb-2 h6 font-weight-bold"><a className="text-dark" href="./article.html">Sun-skimming probe starts calling home</a></h2>
                <div className="card-text text-muted small">Jake Bittle in LOVE/HATE</div>
                <small className="text-muted">Dec 12 · 5 min read</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-md-8">
            <h5 className="font-weight-bold spanborder"><span>All Stories</span></h5>
            <div className="mb-3 d-flex justify-content-between">
              <div className="pr-3">
                <h2 className="mb-1 h4 font-weight-bold"><a className="text-dark" href="./article.html">Nearly 200 Great Barrier Reef coral species also live in the deep sea</a></h2>
                <p>There are more coral species lurking in the deep ocean than previously thought.</p>
                <div className="card-text text-muted small">Jake Bittle in SCIENCE</div>
                <small className="text-muted">Dec 12 · 5 min read</small>
              </div>
              <img height="120" src="./assets/img/demo/blog8.jpg" alt="blog8" />
            </div>
            <div className="mb-3 d-flex justify-content-between">
              <div className="pr-3">
                <h2 className="mb-1 h4 font-weight-bold"><a className="text-dark" href="./article.html">East Antarctica's glaciers are stirring</a></h2>
                <p>Nasa says it has detected the first signs of significant melting in a swathe of glaciers in East Antarctica.</p>
                <div className="card-text text-muted small">Jake Bittle in SCIENCE</div>
                <small className="text-muted">Dec 12 · 5 min read</small>
              </div>
              <img height="120" src="./assets/img/demo/1.jpg" alt="blog1" />
            </div>
            <div className="mb-3 d-flex justify-content-between">
              <div className="pr-3">
                <h2 className="mb-1 h4 font-weight-bold"><a className="text-dark" href="./article.html">50 years ago, armadillos hinted that DNA wasn’t destiny</a></h2>
                <p>Nasa says it has detected the first signs of significant melting in a swathe of glaciers in East Antarctica.</p>
                <div className="card-text text-muted small">Jake Bittle in SCIENCE</div>
                <small className="text-muted">Dec 12 · 5 min read</small>
              </div>
              <img height="120" src="./assets/img/demo/5.jpg" alt="blog5" />
            </div>
          </div>
          <div className="col-md-4 pl-4">
            <h5 className="font-weight-bold spanborder"><span>Popular</span></h5>
            <PopularList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
