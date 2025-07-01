import { Button,Navbar,Nav  } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import Posts from '../Posts/Posts';
const HomePage = () => {

  const posts = useSelector(getAllPosts)

  return (
    <>
    <Navbar>
      <h2>All posts</h2>
      <Nav className="justify-content-end flex-grow-1 pe-2 gap-2">
        <NavLink to={'/post/add'}><Button variant="outline-info">Add</Button></NavLink>
      </Nav>
    </Navbar>
    <Posts posts={posts}/>
    </>
  );
};

export default HomePage;
