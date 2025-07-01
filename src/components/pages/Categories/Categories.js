import { getAllCategories } from '../../../redux/categoriesRedux';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

const Categories = () => {
    
  const categories = useSelector( getAllCategories );

  return (
    <>
        <h2>Categories</h2>
            {categories.map(cat => 
                <Nav.Link as={NavLink} to={"/category/" + cat}>{cat}</Nav.Link>
            )}
    </>
  );
};

export default Categories;
