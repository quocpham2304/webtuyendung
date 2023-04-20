import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
import products from "../../data/Products";
import {BiTimeFive} from 'react-icons/bi'

// const ShopSection = () => {
//   return (
//     <>
//       <div className="container">
//         <div className="section">
//           <div className="row">
//             <div className="col-lg-12 col-md-12 article">
//               <div className="shopcontainer row">
//                 {products.map((product) => (
//                   <div
//                     className="shop col-lg-4 col-md-6 col-sm-6"
//                     key={product._id}
//                   >
//                     <div className="border-product">
//                       <Link to={`/products/${product._id}`}>
//                         <div className="shopBack">
//                           <img src={product.image} alt={product.name} />
//                         </div>
//                       </Link>

//                       <div className="shoptext">
//                         <p>
//                           <Link to={`/products/${product._id}`}>
//                             {product.name}
//                           </Link>
//                         </p>

//                         <Rating
//                           value={product.rating}
//                           text={`${product.numReviews} reviews`}
//                         />
//                         <h3>${product.price}</h3>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//                 {/* Pagination */}
//                 <Pagination />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

const Data = [
  {
    id:1,
    title: 'Web Developer',
    time: 'Now', 
    location: 'Canada',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!',
    company: 'Novac Linus Co.'
  },
  {
    id:2,
    title: 'UI Designer',
    time: '14Hrs', 
    location: 'Manchester',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!',
    company: 'Liquid Accessments'
  },

  {
    id:3,
    title: 'Software Eng',
    time: '10Hrs', 
    location: 'Austria',
    desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, laboriosam!',
    company: 'Web Tech Agency'
  },

  {
    id: 4,
    title: 'Ui/Ux Designer',
    time: '10H',
    location: 'Germany',
    desc: 'This is a job description to edit in the admin dashboard section if you are posting a new job.',
    company: 'Government',
  },

  {
    id: 5,
    title: 'Product Designer',
    time: 'Now',
    location: 'Manchester',
    desc: 'This is a job description to edit in the admin dashboard section if you are posting a new job.',
    company: 'Newcastle',
  },
 

  {
    id: 6,
    title: 'Researcher',
    time: '5H',
    location: 'Norway',
    desc: 'This is a job description to edit in the admin dashboard section if you are posting a new job.',
    company: 'Nin Co.',
  },

  {
    id: 7,
    title: 'Lead Developer',
    time: '14H',
    location: 'Leeds',
    desc: 'This is a job description to edit in the admin dashboard section if you are posting a new job.',
    company: 'Nimeloi - UK',
  },


  {
    id: 8,
    title: 'Data Scientist',
    time: '2 Days',
    location: 'Turkey',
    desc: 'This is a job description to edit in the admin dashboard section if you are posting a new job.',
    company: 'Nome And Sons',
  }

]

// This is a single company, lets see how to map it...

const ShopSection = () => {
  return (
    <div>
      <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-1o" >

       {
        Data.map(({id,image,title,time,location,desc,company}) =>{
          return (
            // This will return a single job post based on the ID
            <div key={id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">

              <span className='flex justify-between items-center gap-4'>
                  <h1 className='text-[16px] font-semibold text-textColor group-hover:text-white'>{title}</h1>
                  <span className='flex items-center text-[#ccc] gap-1'>
                    <BiTimeFive/>{time}
                  </span>
              </span>
              <h6 className='text-[#ccc]'>{location}</h6>
    
              <p className='text-[13px] text-[#959595] pt-[20px] border-t-[2px] mt-[20px] group-hover:text-white'>
                {desc}
              </p>
    
              <div className='company flex items-center gap-2'>
                <img src={image} alt="Company Logo" className='w-[10%]' />
                <span className='text-[14px] py-[1rem] block group-hover:text-white'>{company}</span>
              </div>
    
              <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
                Apply Now
              </button>
  
            </div>
          )
        })
       }

      </div>
    </div>
  )
}

export default ShopSection;
