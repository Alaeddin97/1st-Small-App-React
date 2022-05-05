/*
  ShoppingList
  Mettre à disposition la liste de courses stocké dans la variable "articles".
  Un item par ligne
  Chaque ligne doit rendre son item au format suivant :
    <name> - <price> - <category>
  
  3 boutons doivent permettres d'afficher les items selon les valeurs de "category"
  - Si je click sur le bouton "Food", la liste se met à jour avec uniquement les items concernés
  - Si je click une 2ème fois sur le même bouton, la liste se met à jour avec tous les items
    (reset du filtre)

  Bonus
  - Extraire les items dans un composant nommé ShoppingListItem
  - Mettre à jour notre contenu avec les list des MaterielUI
    https://mui.com/material-ui/react-list/

  Rendre des listes en JSX
  https://fr.reactjs.org/docs/lists-and-keys.html#embedding-map-in-jsx
*/
import React from "react";

const articles = [
  { category: "Food", price: "10,99", name: "Football" },
  { category: "Food", price: "9.99", name: "Baseball" },
  { category: "Food", price: "29.99", name: "Basketball" },
  { category: "Electronics", price: "99.99", name: "iPod Touch" },
  { category: "Electronics", price: "399.99", name: "iPhone 5" },
  { category: "Electronics", price: "199.99", name: "Nexus 7" }
];

class ShoppingList extends React.Component {
  render() {
    return (
      <div>
        <h2>ShoppingList</h2>
        <ul>
          <li>{articles[0].name}</li>
          <li>{articles[1].name}</li>
        </ul>
      </div>
    );
  }
}

export default ShoppingList;
