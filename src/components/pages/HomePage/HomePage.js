
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import { Button, Card, Col, Row,Navbar,Nav  } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
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
    <Row xs={1} md={3} className="g-4">
      {posts.map((post) => (
        <Col key={post.id}>
          <Card>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
                <strong>Author: </strong>{post.author}<br/>
                <strong>Published: </strong>{post.publishedDate}
              </Card.Text>
              <Card.Text>{post.shortDescription}</Card.Text>
              <NavLink to={'/post/' + post.id} >
                <Button>Read More</Button>
              </NavLink>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  );
};

export default HomePage;
