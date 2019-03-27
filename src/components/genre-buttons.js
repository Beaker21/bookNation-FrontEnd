import React, { Component } from "react";
import axios from 'axios';
import GenreItem from './genre-items';

export default class GenreButtons extends Component {
  constructor() {
    super();

    this.state = {
        isLoading: false,
        book: [],
        data: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.book.filter(item => {
        return item.category === filter, this.state.book
      })
    });
  }

  getGenreItems() {
    axios
      .get("https://book-nation.herokuapp.com/library/")
      .then(response => {
        this.setState({
          data: response
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  getGenreItems() {
      console.log(this.state.data)
    // this.state.data.map(item => (
    //      <div key = {item[0]}>
    //             <h3>title: {data[1]}</h3>
    //             <GenreItem key={item.id} item={item} />
    //         </div>
    // )
    // )
}

  componentDidMount() {
    this.getGenreItems();
  }


  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="genre-items-wrapper">
        <button className="btn" onClick={() => this.handleFilter("Fantasy")}>
          Fantasy
        </button>
        <button className="btn" onClick={() => this.handleFilter("Historical Fiction")}>
          Historical Fiction
        </button>
        <button className="btn" onClick={() => this.handleFilter("personal development")}>
          Personal Development
        </button>
        <button className="btn" onClick={() => this.handleFilter("Romance")}>
          Romance
        </button>
        <button className="btn" onClick={() => this.handleFilter("Science fiction")}>
          Science Fiction
        </button>
        {this.getGenreItems()}
      </div>
    );
  }
}