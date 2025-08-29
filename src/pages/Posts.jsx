import { useState } from "react";

export default function Posts() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "ArsenalTillIDie",
      content: "Liverpool has no chance, Arsenal is too strong! 🔥",
      comments: ["True! Arsenal is 🔥", "Liverpool fans are quiet now 😂"],
    },
    {
      id: 2,
      user: "Madridista7",
      content: "Hala Madrid! Real vs Barca will be legendary. ⚽",
      comments: ["Vamosss! 💪", "Barca is finished 😆"],
    },
    {
      id: 3,
      user: "HoopsFan23",
      content: "Basketball season is coming, can’t wait! 🏀",
      comments: ["Lakers on top! 🏆", "Celtics still strong 💚"],
    },
  ]);

  const [newPost, setNewPost] = useState("");

  // Add new post
  const addPost = () => {
    if (newPost.trim() === "") return;
    const newEntry = {
      id: posts.length + 1,
      user: "You",
      content: newPost,
      comments: [],
    };
    setPosts([newEntry, ...posts]);
    setNewPost("");
  };

  // Delete a post
  const deletePost = (id) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  // Edit a post
  const editPost = (id, newContent) => {
    setPosts(
      posts.map((p) =>
        p.id === id ? { ...p, content: newContent } : p
      )
    );
  };

  // Add comment
  const addComment = (id, text) => {
    setPosts(
      posts.map((p) =>
        p.id === id
          ? { ...p, comments: [...p.comments, text] }
          : p
      )
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ marginBottom: "20px" }}>Fan Posts 💬</h2>

      {/* Add new post */}
      <div style={{ marginBottom: "20px" }}>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Share your thoughts..."
          style={{
            width: "100%",
            height: "70px",
            marginBottom: "10px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            padding: "10px",
          }}
        />
        <button
          onClick={addPost}
          style={{
            padding: "8px 16px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Post
        </button>
      </div>

      {/* Display posts */}
      {posts.map((post) => (
        <div
          key={post.id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "12px",
            marginBottom: "15px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <strong>{post.user}</strong>
          <p>{post.content}</p>

          {/* Edit + Delete buttons */}
          <button
            onClick={() => {
              const newContent = prompt("Edit your post:", post.content);
              if (newContent) editPost(post.id, newContent);
            }}
            style={{ marginRight: "10px" }}
          >
            ✏️ Edit
          </button>
          <button onClick={() => deletePost(post.id)}>❌ Delete</button>

          {/* Comments */}
          <div style={{ marginTop: "10px" }}>
            <input
              type="text"
              placeholder="Add a comment..."
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.target.value.trim() !== "") {
                  addComment(post.id, e.target.value);
                  e.target.value = "";
                }
              }}
              style={{
                width: "100%",
                borderRadius: "4px",
                border: "1px solid #ddd",
                padding: "6px",
                marginBottom: "6px",
              }}
            />
            {post.comments.map((c, index) => (
              <p key={index} style={{ fontSize: "14px", margin: "4px 0" }}>
                💬 {c}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
