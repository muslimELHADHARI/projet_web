import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ArticleCard from './ArticleCard';
import MainContent from './MainContent';
import Navbar from './Navbar';
import PopularList from './PopularList';
const Blogs = () => {
  return (
    <div className="container mt-5">
<Navbar/>
<Header/>
<ArticleCard/>
<MainContent/>
<PopularList/>
<Footer/>
    </div>
  );
};

export default Blogs;
