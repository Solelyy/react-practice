import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    
    return (
        
    <div>
        <h1>Jessa Gozun - Full Stack Developer</h1>
        <p>Hi, I build clean, functional, and user-friendly websites. </p>
        <button onClick={() => navigate("/projects")}>View Projects</button>
    </div>
    );
}
export default Home;