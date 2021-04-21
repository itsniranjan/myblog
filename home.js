import { useState } from "react";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My quotes', date: '19.01.21', content: 'Lifes too short. Get busy living or get busy dying', id: 1 },
        { title: 'My timetable', date: '01.02.21', content: 'First get a sleep cycle. Do yoga, Eat healthy food in healthy amount', id: 2 },
        { title: 'My dream', date: '29.03.21', content: 'Not sure yet. But thats okay', id: 3 },
        { title: 'My mistakes', date: '31.03.21', content: 'See a lot of unnecessary content on web, thereby wasting time', id: 4 },
    ]);
    return (
        <div className="home">
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h3>{blog.title}</h3>
                    <h5>{blog.date}</h5>
                </div>
            )
            )}

        </div>
    );
}

export default Home;