import image1 from '../assets/image 12.png'
import image2 from '../assets/wedding-photography 1.png'
import image3 from '../assets/mountain-bike 1.png'
const data=[{
    id:1,
    img:image1,
    rate:"6.5"  ,
    reviewCount:Math.floor(Math.random() * 100),
    desc:"Life lesson with Katie Zaferes",
    price:"136$",
    openSpots: 0
  },
    {id:2,
    img:image2,
    rate:"5.0",
    reviewCount:Math.floor(Math.random() * 100),
    desc:"Learn wedding photography",
    price:"125$",
    openSpots: 10},
  { id:3,
    img:image3,
    rate:"4.8",
    reviewCount:Math.floor(Math.random() * 100),
    desc:"Group Mountain Biking",
    price:"50$",
    openSpots: 0},
    { id:5,
      img:image3,
      rate:"4.8",
      reviewCount:Math.floor(Math.random() * 100),
      desc:"Group Mountain Biking",
      price:"50$",
      openSpots: 28},
      {id:4,
        img:image2,
        rate:"5.0",
        reviewCount:Math.floor(Math.random() * 100),
        desc:"Learn wedding photography",
        price:"125$",
        openSpots: 0}
  ]
  export default data