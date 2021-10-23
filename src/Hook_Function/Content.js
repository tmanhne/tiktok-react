import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const tabs = ["posts", "comments", "albums", "photos","todos","users"];
export default function Content() {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts")
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((rex) => rex.json())
      .then((posts) => {
        setPosts(posts);
      });
  }, [type]);

  return (
    <div>
      {tabs.map((tab) => (
        <button onClick={() => setType(tab)} key={tab}
        style={type === tab ?{
            color: '#fff',
            backgroundColor: '#333'
        } : {}}>
          {tab}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
  );
}
