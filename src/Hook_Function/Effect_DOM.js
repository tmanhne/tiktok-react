import React from "react";
import { useState } from "react";
import { useEffect } from "react";

// Listen Dom events with useEffect
const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];
export default function Effect_DOM() {
   const [title, setTitle] = useState("");
   const [posts, setPosts] = useState([]);
   const [type, setType] = useState("posts");
   const [showGoToTop, setShowGoToTop] = useState(false);

   useEffect(() => {
      fetch(`https://jsonplaceholder.typicode.com/${type}`)
         .then((rex) => rex.json())
         .then((posts) => {
            setPosts(posts);
         });
   }, [type]);
   const scrollToTop = () => {
      window.scrollTo({
         top: 0,
         behavior: "smooth",
         /* you can also use 'auto' behaviour
           in place of 'smooth' */
      });
   };
   useEffect(() => {
      const handlerScroll = () => {
         // True/ False boolean
         setShowGoToTop(window.scrollY >= 200);
      };
      window.addEventListener("scroll", handlerScroll);

      return () => {
         console.log("Clean Up......");
         //CleanUp function
         window.removeEventListener("scroll", handlerScroll);
      };
   }, []);

   return (
      <div>
         {tabs.map((tab) => (
            <button
               onClick={() => setType(tab)}
               key={tab}
               style={
                  type === tab
                     ? {
                          color: "#fff",
                          backgroundColor: "#333",
                       }
                     : {}
               }
            >
               {tab}
            </button>
         ))}
         <input value={title} onChange={(e) => setTitle(e.target.value)} />
         <ul>
            {posts.map((post) => (
               <li key={post.id}>{post.title || post.name}</li>
            ))}
         </ul>
         {showGoToTop && (
            <button onClick={scrollToTop} style={{ position: "fixed", right: 20, bottom: 20, color: "orangered"}}>
              Go Top
            </button>
         )}
      </div>
   );
}
