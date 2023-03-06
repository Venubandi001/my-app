import React from "react";
import axios from "axios";
class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      category: "men's clothing",
      // women:"women's clothing"
    };
  }

  componentDidMount() {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      // console.log(response);
        this.setState({ items: response.data });
      })
      .catch((error) => {
        // console.log(error);
      });
  }

  handleCategoryChange = (e) => {
    // console.log(e);
    this.setState({ category: e.target.value });
  };

  render() {
    // console.log(this.state.items);
    let { items, category } = this.state;
    let filteredItems = this.state.items.filter((item) =>{ 
      // console.log(item);
      return item.category === category});
    console.log(filteredItems);
    return (
      <div>
        <label>
          Category:
          <select  onChange={this.handleCategoryChange}>
            <option value="men's clothing">Men's Clothing</option>
            <option value="jewelery">Jewelry</option>
            <option value="electronics">Electronics</option>
            <option value="Women's clothing">Women</option>
          </select>
        </label>

        <ul>
          {filteredItems.map((item) =>{ 
            console.log(item);
            return (<li key={item.id}>
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p>{item.price}</p>
            </li>
          )})}
        </ul>
      </div>
    );
  }
}

export default Category;
