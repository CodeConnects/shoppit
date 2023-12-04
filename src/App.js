import Category from './components/category/category.jsx';

import './categories.styles.scss';

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Handy Man Services',
      image: 'https://www.doola.com/wp-content/uploads/2023/03/how-to-start-a-handy-man-business-1600x800.jpg',
    },
    {
      id: 2,
      title: 'Property Management',
      image: 'https://lirp.cdn-website.com/f0370a60/dms3rep/multi/opt/fairview+property+management-1920w.jpeg',
    },
    {
      id: 3,
      title: 'Hard Money Lending',
      image: 'https://bradloans.com/wp-content/uploads/2020/04/What-is-a-Hard-Money-Loan.jpg',
    },
    {
      id: 4,
      title: 'Residential Rehabs',
      image: 'https://www.news10.com/wp-content/uploads/sites/64/2021/03/8504413673_e35f4bc5be_o.jpg',
    },
    {
      id: 5,
      title: 'Commercial Rehabs',
      image: 'https://www.ocfrealty.com/wp-content/uploads/2023/05/My-project-2-2.jpg',
    },
  ];

  return (
    <div className='categories-wrap'>
      
      {categories.map((category) => (
        <Category
          key={category.id}
          title={category.title}
          image={category.image}
        />
      ))}
  
    </div>
  );
};

export default App;