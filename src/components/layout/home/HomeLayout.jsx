import './HomeLayout.css';
import React from 'react';
import WideCard from '../../ui/cards/WideCard';
import HeroCard from '../../ui/cards/HeroCard';
import SquareCard from '../../ui/cards/SquareCard';
import StandardCard from '../../ui/cards/StandardCard';
import LongHeroCard from '../../ui/cards/LongHeroCard';
import ProductListItemCard from '../../ui/cards/ProductListItemCard';
import { Link } from 'react-router-dom';

const HomeLayout = (props) => {
  let { data } = props;
  console.log(data.sc4[0]);
  let productList = data.sc0[0].products.slice(0, 10);
  let productList_2 = data.sc4[0].products.slice(0, 10);
  
  return (
      <div className="home-container">
        <div className="home-layout-hero">
          <HeroCard ends={data.ends}/>
        </div>
        <div className="home-layout-container">
          <h2 className="list-title">{data.sc0[0].name}</h2>
          <div className="h-layout-sec-4 wd-96 m-auto">
            {productList.map((item, i) => {
              return <div key={i}><ProductListItemCard data={item} /></div>
            })}
          </div>
          <h6 className="view-more">
            <Link to={`${data.sc0[0].sale_key}`}>
              View+All
            </Link>
          </h6>
          <div className="h-layout-sec-1 wd-96 m-auto">
            {data.sc1.map((item, i) => {
              return <WideCard data={item} key={i} />
            })}
          </div>
        </div>
        <div className="h-layout-sec-2 wd-96 m-auto">
          {data.sc2.map((item, i) => {
            return <SquareCard data={item} key={i} />
          })}
        </div>
        <h2 className="list-title">{data.sc4[0].name}</h2>
        <div className="h-layout-sec-4 wd-96 m-auto">
          {productList_2.map((item, i) => {
          return <ProductListItemCard data={item} key={i}/>
          })}
        </div>
        <h6 className="view-more">
            <Link to={`${data.sc4[0].sale_key}`}>
              View+All
            </Link>
        </h6>
        <div className="h-layout-sec-3 wd-96 m-auto">
          {data.sc3.map((item, i) => {
            return <LongHeroCard data={item} key={i}/>
          })}
        </div>
        <div className="h-layout-sec-5 wd-96 m-auto">
          {data.sc5.map((item, i) => {
            return <StandardCard data={item} key={i} />
          })}
        </div>
      </div>
  )
}

export default HomeLayout;