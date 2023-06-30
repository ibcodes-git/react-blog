import React,{ useState, useEffect } from 'react'

const Blog = () => {
    const [posts,setPosts] = useState([]);
    const [loading,setLoading] = useState(true);
    const[value,setValue] = useState(50);
    const[button, setButton] = useState(true);


    const loadPost = async () => {
        try{
        const data= await fetch("https://jsonplaceholder.typicode.com/posts");
        const  posts =  await data.json();
        setLoading(false)
        setPosts(posts);
        }
        catch(error) {
            console.log(error);
        }
    } 
   useEffect(()=>{
    loadPost()
    setLoading(false);
   },[posts]) ;
   
   if(loading) {
    return (
        <div>
            <h1 className='text-red-600 font-bold text-3xl m-5'>Loading...</h1>
        </div>
    )
   }  
    return(
    <div>
    <h1 className='font-bold text-cyan-900 text-3xl justify-center content-center'>Blog Posts</h1>
    <div className='flex flex-row flex-wrap gap-5 justify-center '>
       {(posts.map((items,index)=>{
            return (
                <div className='w-1/4  border border-black m-5 '>
                    
                    <img src="https://neilpatel.com/wp-content/uploads/2017/09/blog-post-image-guide.jpg" alt="blog"/>
                    <h3 className='text-black text-3xl font-semibold'>{items.title.slice(0,15)}</h3> 
                    <p className={`flex text-justify m-3 `}> {items.body.slice(0,value)}</p>
                    {button?<button className='bg-red-400 text-white rounded p-1 hover:bg-blue-400 hover:text-black justify-start m-3 flex  ' onClick= {(e) =>{ 
                        setButton(false)
                        setValue(items.body.length);
                        
                        }}>Read More...</button>
                    :<button className='bg-red-400 text-white rounded p-1 hover:bg-blue-400 hover:text-black justify-start m-3 flex' onClick= {(e) =>{
                        setButton(true)
                        setValue(items.body.length/2);
                        
                        }}>Show Less</button>
                    }
                </div>
            )
        }))
        };
    </div>
    </div>
    )
}
   
  


export default Blog