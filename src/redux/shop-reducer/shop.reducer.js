const INITIAL_STATE = {
    SHOP_DATA : [
        {
            title: "mens",
            imageUrl: "https://i.ibb.co/HXQCFYd/men.jpg",
            size: "large",
            id: 1,           
            items : [
                {
                    id: 11,
                    name: "Camo Down Vest",
                    imageUrl: "https://i.ibb.co/xJS0T3Y/camo-vest.png",
                    price: 325
                  },
                  {
                    id: 12,
                    name: "Floral T-shirt",
                    imageUrl: "https://i.ibb.co/qMQ75QZ/floral-shirt.png",
                    price: 20
                  },
                  {
                    id: 13,
                    name: "Black & White Longsleeve",
                    imageUrl: "https://i.ibb.co/55z32tw/long-sleeve.png",
                    price: 25
                  },
                  {
                    id: 14,
                    name: "Pink T-shirt",
                    imageUrl: "https://i.ibb.co/RvwnBL8/pink-shirt.png",
                    price: 25
                  },
                  {
                    id: 15,
                    name: "Jean Long Sleeve",
                    imageUrl: "https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png",
                    price: 40
                  },
                  {
                    id: 16,
                    name: "Burgundy T-shirt",
                    imageUrl: "https://i.ibb.co/mh3VM1f/polka-dot-shirt.png",
                    price: 25
                  }                   
          
            ]
          }, 
        {
            title: "womens",
            imageUrl: "https://i.ibb.co/PjpPyDR/women.jpg",
            size: "large",
            id: 2,           
            items : [
                {
                    id: 21,
                    name: "Blue Tanktop",
                    imageUrl: "https://i.ibb.co/7CQVJNm/blue-tank.png",
                    price: 25
                  },
                  {
                    id: 22,
                    name: "Floral Blouse",
                    imageUrl: "https://i.ibb.co/4W2DGKm/floral-blouse.png",
                    price: 20
                  },
                  {
                    id: 23,
                    name: "Floral Dress",
                    imageUrl: "https://i.ibb.co/KV18Ysr/floral-skirt.png",
                    price: 80
                  },
                  {
                    id: 24,
                    name: "Red Dots Dress",
                    imageUrl: "https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png",
                    price: 80
                  },
                  {
                    id: 25,
                    name: "Striped Sweater",
                    imageUrl: "https://i.ibb.co/KmSkMbH/striped-sweater.png",
                    price: 45
                  },
                  {
                    id: 26,
                    name: "Yellow Track Suit",
                    imageUrl: "https://i.ibb.co/v1cvwNf/yellow-track-suit.png",
                    price: 135
                  },
                  {
                    id: 27,
                    name: "White Blouse",
                    imageUrl: "https://i.ibb.co/qBcrsJg/white-vest.png",
                    price: 20
                  }
            
            ]
          },                                     
        {
            title: "accessories",
            imageUrl: "https://i.ibb.co/J7myB9m/accessories.jpg",
            id: 3,           
            items : [
                {
                    id: 31,
                    name: "Brown Brim",
                    imageUrl: "https://i.ibb.co/ZYW3VTp/brown-brim.png",
                    price: 25
                  },
                  {
                    id: 32,
                    name: "Blue Beanie",
                    imageUrl: "https://i.ibb.co/ypkgK0X/blue-beanie.png",
                    price: 18
                  },
                  {
                    id: 33,
                    name: "Brown Cowboy",
                    imageUrl: "https://i.ibb.co/QdJwgmp/brown-cowboy.png",
                    price: 35
                  },
                  {
                    id: 34,
                    name: "Grey Brim",
                    imageUrl: "https://i.ibb.co/RjBLWxB/grey-brim.png",
                    price: 25
                  },
                  {
                    id: 35,
                    name: "Green Beanie",
                    imageUrl: "https://i.ibb.co/YTjW3vF/green-beanie.png",
                    price: 18
                  },
                  {
                    id: 36,
                    name: "Palm Tree Cap",
                    imageUrl: "https://i.ibb.co/rKBDvJX/palm-tree-cap.png",
                    price: 14
                  },
                  {
                    id: 37,
                    name: "Red Beanie",
                    imageUrl: "https://i.ibb.co/bLB646Z/red-beanie.png",
                    price: 18
                  },
                  {
                    id: 38,
                    name: "Wolf Cap",
                    imageUrl: "https://i.ibb.co/1f2nWMM/wolf-cap.png",
                    price: 14
                  },
                  {
                    id: 39,
                    name: "Blue Snapback",
                    imageUrl: "https://i.ibb.co/X2VJP2W/blue-snapback.png",
                    price: 16
                  }                    
            ]
        },
        {
            title: "shoes",
            imageUrl: "https://i.ibb.co/Jq4fLgY/shoes.jpg",
            id: 4,              
            items : [
                {
                    id: 41,
                    name: "Adidas NMD",
                    imageUrl: "https://i.ibb.co/0s3pdnc/adidas-nmd.png",
                    price: 220
                  },
                  {
                    id: 42,
                    name: "Adidas Yeezy",
                    imageUrl: "https://i.ibb.co/dJbG1cT/yeezy.png",
                    price: 280
                  },
                  {
                    id: 43,
                    name: "Black Converse",
                    imageUrl: "https://i.ibb.co/bPmVXyP/black-converse.png",
                    price: 110
                  },
                  {
                    id: 44,
                    name: "Nike White AirForce",
                    imageUrl: "https://i.ibb.co/1RcFPk0/white-nike-high-tops.png",
                    price: 160
                  },
                  {
                    id: 45,
                    name: "Nike Red High Tops",
                    imageUrl: "https://i.ibb.co/QcvzydB/nikes-red.png",
                    price: 160
                  },
                  {
                    id: 46,
                    name: "Nike Brown High Tops",
                    imageUrl: "https://i.ibb.co/fMTV342/nike-brown.png",
                    price: 160
                  },
                  {
                    id: 47,
                    name: "Air Jordan Limited",
                    imageUrl: "https://i.ibb.co/w4k6Ws9/nike-funky.png",
                    price: 190
                  },
                  {
                    id: 48,
                    name: "Timberlands",
                    imageUrl: "https://i.ibb.co/Mhh6wBg/timberlands.png",
                    price: 200
                  }                    
            ]
        },      
      ]
}

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {          
        default:
            return state;
    }
};

export default shopReducer;