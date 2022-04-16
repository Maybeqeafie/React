import React, {useEffect, useMemo, useState} from 'react';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import './Styles/App.css'
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import axios from "axios";
import PostAPI from "./API/PostAPI";

function App() {
  const [posts, setPosts] = useState([])



    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modal, setModal] = useState(false);



    const sortedPost = useMemo(() => {
        if (filter.sort) {
            console.log(filter.query)
                return [...posts].sort((a, b) => b[filter.sort].localeCompare(a[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
      return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()))
  }, [filter.query, sortedPost])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
      setModal(false)
  }


  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }




    async function fetchPost () {
        const posts = await PostAPI.getAll();
        setPosts(posts)
    }

    useEffect(() => {
        fetchPost();
    }, [])


  return (
    <div className="App">
        <MyButton style={{marginTop: '50px', height: "50px"}} onClick={() => setModal(true)}>
            Создать пост
        </MyButton>

        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create={createPost}/>
        </MyModal>
        <hr style={{margin: '15px 0'}}/>
        <div style={{marginTop: "50px", width: "800px"}}><PostFilter filter={filter} setFilter={setFilter}/>
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title = 'Список постов'/>
        </div>
    </div>
  );
}

export default App;
