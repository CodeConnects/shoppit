import './Category.scss';

const Category = ({ title, image }) => (
  <div className='single-category'>
    <div className='category-bg-img'  style={{
      backgroundImage: `url(${image})`
    }} />
    
    <div className='single-category-body'>
      <h3>{title}</h3>
      <p>lorem ipsum dolor sit amet, consectetur.</p>
    </div>
  </div>
);

export default Category;