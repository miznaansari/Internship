// import React, { useEffect, useState } from 'react';

// const Image = () => {
//   const [imgList, setImgList] = useState([]); // Initialize with an empty array
//   const [page, setPage] = useState(1); // Track the current page
//   const [loading, setLoading] = useState(false); // Track loading state

//   useEffect(() => {
//     fetchImg(page);

//     // Add scroll event listener
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       // Clean up scroll event listener
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [page]); // Re-run useEffect when page changes

//   const fetchImg = async (page) => {
//     setLoading(true); // Set loading to true before fetching
//     const response = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`);
//     const data = await response.json();
//     setImgList((prev) => [...prev, ...data]); // Append new data to existing list
//     setLoading(false); // Set loading to false after fetching
//   };

//   // Handle scroll event
//   const handleScroll = () => {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 && !loading) {
//       setPage((prevPage) => prevPage + 1); // Load next page when near bottom
//     }
//   };

//   return (
//     <>
//       <div className="container">
//         {imgList.map((img) => (
//           <div key={img.id}>
//             <h1>{img.id}</h1>
//             <img src={img.thumbnailUrl} alt={img.title} />
//             <p>{img.title}</p>
//           </div>
//         ))}
//       </div>
//       {loading && <h2>Loading more images...</h2>}
//     </>
//   );
// };

// export default Image;
import React, { useEffect, useState } from 'react'
import { Bars } from 'react-loader-spinner'

const Image = () => {
    const [loading, setloading] = useState(false)
    const [imglist, setimglist] = useState([])
    const [page, setpage] = useState(1)

    useEffect( () => {
        imglistfun(page)
        window.addEventListener('scroll', handleScroll);
        return () => {
            //       // Clean up scroll event listener
            window.removeEventListener('scroll', handleScroll);
        };
    }, [page])

    const imglistfun = async (page) => {
        setloading(true)
        const reponse = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=20`)
        const data = await reponse.json();
        setimglist((prev) => [...prev, ...data]);
        setloading(false);
    };

    window.addEventListener('scroll', function () {
        console.log(window.scrollY)

        console.log(document.body.offsetHeight - 633)
    })

    const handleScroll = () => {
    console.log(loading)

        if (document.body.offsetHeight - 633 == window.scrollY ) {
            // console.log(page)
            setpage((prevPage) => {
                const newPage = prevPage;
                // console.log(newPage); // Log the new page number
                return newPage + 1;

            });
            // console.log(page)

        }
    }
    // handleScroll()
    console.log(imglist)




    return (
        <>
            <div className="container">
                <div className="row d-flex justify-content-between">
                    {imglist.map((img) => (
                        <div className="card" key={img.id} style={{width:'14em',margin:'10px'}}>
                        {/* <img src={img.thumbnailUrl} className="card-img-top" alt="..."/> */}
                        <div className="card-body">
                          <h5 className="card-title">{img.id+' '+ img.title}</h5>
                          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                          {/* <a href="#" className="btn btn-primary">Go somewhere</a>   */}
                        </div>
                      </div>
                    ))}
                </div>
            </div>

            {loading && <Bars
  height="80"
  width="100%"
  color="#4fa94d"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperclassName=""
  visible={true}
  />}
        </>
    )
}

export default Image
