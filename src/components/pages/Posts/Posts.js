import { Button,Row, Card, Col  } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../../utils/capFirstLetter';

const Posts = ({posts}) => {


  return (
    <Row xs={1} md={3} className="g-4">
      {posts.map((post) => (
        <Col key={post.id}>
          <Card>
            <Card.Body>
              <Card.Title>{post.title}</Card.Title>
              <Card.Text>
                <strong>Author: </strong>{post.author}<br/>
                <strong>Published: </strong>{post.publishedDate}<br/>
                <strong>Category: </strong>{capitalizeFirstLetter( post.category ) }
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

export default Posts;
