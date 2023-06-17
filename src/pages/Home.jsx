import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './Home.css';
const Home = () => {
    //criando state que armazenará os posts da api
    const [posts, setPosts] = useState([]);

    //função de busca na api
    const getPosts = async (url) => {
      // realizando raquisição da api
        const response = await fetch(url); 
        //convertendo os dados da respostas para json
        const data = await response.json();
        setPosts(data)
    }

    //executando a função getPosts atraves do useEffect
    useEffect(() => {
        const url = "http://localhost:3000/posts"
        getPosts(url);
    }, [])
    return (
        <div className="home">
            <h1>Últimos posts</h1>
            {posts.map((post) => (
                <div className="post" key={post.id}>
                    <h2>{post.titulo}</h2>
                    <p>{post.corpo}</p>
                    <Link className="btn" to={`/posts/${post.id}`}>
                        Ler mais
                    </Link>
                </div>
            ))}
        </div>
    )
}

export default Home;
