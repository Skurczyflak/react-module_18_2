
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import { Button, Card, Col, Row  } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
const HomePage = () => {

  const posts = useSelector(getAllPosts)

  return (
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
  );
};

export default HomePage;
