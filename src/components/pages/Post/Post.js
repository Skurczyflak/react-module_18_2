import { getPostById } from "../../../redux/postsRedux";
import { useSelector, useDispatch } from "react-redux";
import { useParams, NavLink, Navigate } from "react-router-dom";
import { Button, Nav, Navbar, Container, Modal } from "react-bootstrap";
import { useState } from "react";
import { deletePost } from "../../../redux/postsRedux";
const Post = () => {

  const { postId } = useParams();
  const post = useSelector((state) => getPostById(state, postId ));

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch = useDispatch();

  const handleRemove = e => {
    e.preventDefault();
    dispatch(deletePost(postId))
    setShow(false)
  };
 if(!post) return <Navigate to="/" />
  else return (
    <>
      <Container key={post.id} className="col-md-6 mx-auto">
        <Navbar>
          <h2>{post.title}</h2>
          <Nav className="justify-content-end flex-grow-1 pe-2 gap-2">
            <NavLink to={'/post/edit/' + post.id}><Button variant="outline-info">Edit</Button></NavLink>
            <NavLink onClick={handleShow}><Button variant="outline-danger">Delete</Button></NavLink>
          </Nav>
        </Navbar>
          <p>
            <strong>Author: </strong>{post.author}<br/>
            <strong>Published: </strong>{post.publishedDate}
          </p>
          <p>
            {post.content}
          </p>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>This operation will pernamently delete this post from the app<br/>Are you sure you want to do it?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleRemove}>
            Remove
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
};

export default Post;
