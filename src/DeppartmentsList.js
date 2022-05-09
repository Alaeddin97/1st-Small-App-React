import React from "react";
import "./Deppartments.css";

class DeppartmentsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputSearchValue: "",
      click: false,
      depValue: "",
      items: [],
      DataisLoaded: false
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
  handleClickInput(dep) {
    this.setState({
      selectDep: dep,
      click: true
    });
  }

  componentDidMount() {
    fetch("https://geo.api.gouv.fr/departements")
      .then((data) => data.json())
      .then((data) => {
        this.setState({
          items: data,
          DataisLoaded: true
        });
      });
  }

  render() {
    const {
      items,
      DataisLoaded,
      inputSearchValue,
      depValue,
      click
    } = this.state;
    const departmentList = items.filter(
      (item) => item.nom.toLowerCase().indexOf(inputSearchValue) !== -1
    );

    return (
      <div className="App">
        {!click && DataisLoaded && (
          <>
            <h1>La liste des départements français</h1>
            <label for="nom">Filtrer par nom: </label>
            <input
              id="nom"
              type="text"
              name="nom"
              value={inputSearchValue}
              onChange={this.handleChangeInput} //event synthetic React
            />

            <table>
              <tr className="tab1">
                <th>Code</th>
                <th>Code de la région</th>
                <th>Nom de la région</th>
              </tr>
              {departmentList.map((item) => (
                <tr className="tab2">
                  <th>{item.code}</th>
                  <th> {item.codeRegion}</th>
                  <th
                    value={depValue}
                    onClick={() => this.handleClickInput(item)}
                  >
                    {" "}
                    {/**La valeur passée */}
                    {item.nom}
                  </th>
                </tr>
              ))}
            </table>
          </>
        )}

        {click && DataisLoaded && (
          <>
            <h1>Nom : {this.state.selectDep.nom}</h1>
            <p>Code de la région: {this.state.selectDep.code}</p>
            <p>Code: {this.state.selectDep.code}</p>
          </>
        )}
      </div>
    );
  }
}
export default DeppartmentsList;
