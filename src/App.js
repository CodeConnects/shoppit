
const App = () => {

  const categories = [
    {
      id: 1,
      title: "Category",
    },
    {
      id: 2,
      title: "Category",
    },
    {
      id: 3,
      title: "Category",
    },
    {
      id: 4,
      title: "Category",
    },
    {
      id: 5,
      title: "Category",
    },
  ];

  return (
    <div className="categories-wrap">
      {categories.map((category) => (
        <div className="single-category" key={category.id}>
          <img src="https://via.placeholder.com/150" alt="category" />
          <div className="single-category-body">
            <h3>{category.title} {category.id}</h3>
            <p>shoppit</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
