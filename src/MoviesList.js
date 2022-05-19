import React from "react";
import "./Deppartments.css";
class MoviesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSearchValue: "",
      click: false,
      items: [],
      DataisLoaded: false,
      selectMovie:""
    };
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleClickInput = this.handleClickInput.bind(this);
  }

  handleChangeInput(e) {
    const { value } = e.target;
    this.setState({
      inputSearchValue: value
    });
  }


  componentDidMount() {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=b95a398c6c65c248eab3893cd6e36e2b&sort_by=popularity.desc")
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          items: data.results,
          DataisLoaded: true
        });
      });
  }

  handleClickInput(film) {
    this.setState({
      selectMovie: film,
      click: true
    });
  }

  render() {
    const {
      items,
      DataisLoaded,
      inputSearchValue,
      click,
    } = this.state;
 
    const MoviesList = items.filter(
      (item) => item.title.toLowerCase().indexOf(inputSearchValue) !== -1
    );

    
    return (
      <div>
        {!click && DataisLoaded && (
          <>
            <h1>Movies</h1>
            <label for="title">Filtrer par title: </label>
            <input
              id="nom"
              type="text"
              name="nom"
              value={inputSearchValue}
              onChange={this.handleChangeInput} //event synthetic React
            />
            <table>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Release date</th>
              </tr>
              {MoviesList.map((item) => (
                <tr>
                  <th>{item.id}</th>
                  <th
                   onClick={() => this.handleClickInput(item)}
                  > {item.title}</th>
                  <th >{item.release_date}
                  </th>
                </tr>
              ))}
            </table>
          </>
        )}



            {click && DataisLoaded && (
          <>
          <div  className="float-container">
          
          <div className="float-child">
            <img src={"https://image.tmdb.org/t/p/w500"+this.state.selectMovie.backdrop_path} className="image"></img></div>
           
           <div className="float-child">
            <p className="titre">{this.state.selectMovie.title}</p>({this.state.selectMovie.release_date})
            <p>Overview: {this.state.selectMovie.overview}</p>
            
            </div>
          </div>
        
            
           
          </>
        )}
      </div>
    );
  }
}
export default MoviesList;
