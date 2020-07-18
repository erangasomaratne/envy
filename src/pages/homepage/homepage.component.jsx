import React from 'react';
import { Link } from 'react-router-dom';
import FeaturedProducts from '../../components/feaured-products/featured-products.component';
import './homepage.styles.scss';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            featuredProducts : [                
                     {
                        id: 1,
                        name: "Crop top and jogger set",
                        imageUrl: "https://i.ibb.co/zbjM3FW/Crop-Top-And-Jogger-Set.jpg",
                        price: 35
                      },
                      {
                        id: 2,
                        name: "Jump suit set",
                        imageUrl: "https://i.ibb.co/qCPDp0t/Jumpsuit-Set.jpg",
                        price: 18
                      },
                      {
                        id: 3,
                        name: "Crew Tee",
                        imageUrl: "https://i.ibb.co/Dt9GTbk/Crew-Tee.jpg",
                        price: 14
                      },              
                                                  
                      {
                        id: 4,
                        name: "Moto jeans",
                        imageUrl: "https://i.ibb.co/pzFHjSb/Moto-Jeans.jpg",
                        price: 160
                      },
                      {
                        id: 5,
                        name: "Active short",
                        imageUrl: "https://i.ibb.co/QkFygf5/Active-Short.jpg",
                        price: 190
                      },
                      {
                        id: 6,
                        name: "Twill shorts",
                        imageUrl: "https://i.ibb.co/gDjQJtS/Twill-Shorts.jpg",
                        price: 200
                      }
                    ,               
                      
                      {
                        id: 7,
                        name: "Short sleev polo",
                        imageUrl: "https://i.ibb.co/XYbjv33/Short-Sleeve-polo.jpg",
                        price: 90
                      },
                      {
                        id: 8,
                        name: "Hoodie",
                        imageUrl: "https://i.ibb.co/x8Bbw4T/Hoodie.jpg",
                        price: 165
                      },
                      {
                        id: 9,
                        name: "Short sleeve tee",
                        imageUrl: "https://i.ibb.co/gWZwQrV/Short-Sleeve-Tee.jpg",
                        price: 185
                      }
                    ,
                 
                      {
                        id: 10,
                        name: "Earrings",
                        imageUrl: "https://i.ibb.co/wBNrZKp/Earrings.jpg",
                        price: 25
                      },
                                           
                      {
                        id: 11,
                        name: "Sandals",
                        imageUrl: "https://i.ibb.co/CJn5gsG/Sandals.jpg",
                        price: 80
                      },
                                      
                      {
                        id: 12,
                        name: "Jam jump suite",
                        imageUrl: "https://i.ibb.co/WVJC9wc/jam-jump-suite.jpg",
                        price: 20
                      }
                   ,         
                     
                      {
                        id: 13,
                        name: "Mesh crop top",
                        imageUrl: "https://i.ibb.co/9p2P320/mesh-crop-top.jpg",
                        price: 25
                      },
                      
                      {
                        id: 14,
                        name: "Skinny jeans",
                        imageUrl: "https://i.ibb.co/QbSqV2D/skinny-jeans-light-blue.jpg",
                        price: 40
                      },
                      {
                        id: 15,
                        name: "Mini dress",
                        imageUrl: "https://i.ibb.co/51z3y3d/mini-dress.jpg",
                        price: 25
                      }     
                ]
            }
    }

    render(){
        const { featuredProducts } = this.state;        
        return(
            <div className='home'>
              <div className='home-hero'>
                <h1 className='home-hero-heading'>
                explore your true style            
                </h1>  
                <button className='home-hero-btn'><Link to='/shop'>shop more</Link></button>
              </div>
              <div className='home-featured-products'>
                <h2 className='home-featured-products-heading'>featured products</h2>
                <div className='home-featured-products-container'>
                  {
                      featuredProducts.map(({ id,  name, imageUrl, price}) => <FeaturedProducts key={id} name={name} imageUrl={imageUrl} price={price} /> )
                  } 
              </div>
              </div>
              <div className='home-paralax-img'>
                  <h2 className='home-paralax-img-heading'>dress like its your day</h2>
              </div>
            </div>
        );
    }
}

export default HomePage;