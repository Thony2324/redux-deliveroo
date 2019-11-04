import React from "react";

function App() {
  return (
    <div className="App">
      <header class="Header">
        <div class="TopBar">
          <div class="TopBar--center">
            <svg class="Logo" viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M109.547 59.696h6.837l-1.132-5.26V23.082h-6.54v14.303c-1.97-2.26-4.675-3.587-7.87-3.587-6.543 0-11.608 5.356-11.608 13.22 0 7.864 5.065 13.22 11.607 13.22 3.248 0 6.05-1.375 8.02-3.735l.687 3.195zm129.302-18.87c1.327 0 2.556.34 3.687 1.127l3.1-6.928c-1.43-.887-3.1-1.278-4.723-1.278-2.95 0-5.41 1.323-6.982 3.784l-.69-3.197h-6.74l1.083 4.964v20.395h6.538V43.525c.886-1.672 2.558-2.702 4.723-2.702v.002h.002zm19.178 12.58c-3.784 0-6.59-2.507-6.59-6.39 0-3.932 2.806-6.388 6.59-6.388 3.838 0 6.593 2.456 6.593 6.387 0 3.884-2.754 6.39-6.59 6.39h-.002zm-162.45-6.39c0-3.932 2.803-6.388 6.59-6.388 3.838 0 6.59 2.456 6.59 6.387 0 3.884-2.752 6.39-6.588 6.39-3.787 0-6.592-2.506-6.592-6.39zm191.42 6.39c-3.786 0-6.59-2.507-6.59-6.39 0-3.932 2.804-6.388 6.59-6.388 3.836 0 6.59 2.456 6.59 6.387 0 3.884-2.754 6.39-6.59 6.39zM132.27 40.233c3.394 0 5.608 1.572 6.296 4.472h-12.59c.738-2.9 2.95-4.472 6.294-4.472zm78.25 0c3.394 0 5.608 1.572 6.296 4.472h-12.59c.738-2.9 2.95-4.472 6.294-4.472zM178.6 59.696h10.525l6.838-25.36h-7.132l-5.014 20.544-5.017-20.544h-7.036l6.838 25.36h-.002zm-16.87 0h6.538v-25.36h-6.538v25.36zm-28.46.47c3.643 0 7.232-.984 10.232-2.9l-2.507-5.602c-2.362 1.228-4.968 1.966-7.624 1.966-3.44 0-5.85-1.327-6.885-3.785h18.393c.197-.933.297-1.867.297-2.998 0-7.863-5.46-13.122-12.788-13.122-7.376 0-12.786 5.308-12.786 13.22 0 8.06 5.36 13.22 13.673 13.22h-.002zm166.664-13.15c0-7.864-5.51-13.22-12.935-13.22-7.43 0-12.937 5.356-12.937 13.22 0 7.864 5.508 13.22 12.935 13.22 7.427 0 12.935-5.356 12.935-13.22zm-88.53 13.22c3.638 0 7.23-.983 10.232-2.9l-2.51-5.605c-2.362 1.23-4.968 1.966-7.625 1.966-3.44 0-5.85-1.325-6.884-3.784h18.395c.197-.934.294-1.867.294-2.997 0-7.864-5.46-13.122-12.788-13.122-7.376 0-12.786 5.306-12.786 13.22 0 8.06 5.362 13.22 13.674 13.22v.003zm46.625 0c7.427 0 12.933-5.356 12.933-13.22 0-7.864-5.507-13.22-12.935-13.22-7.428 0-12.935 5.356-12.935 13.22 0 7.864 5.508 13.22 12.934 13.22h.002zm-108.694-.54h6.54V23.08h-6.54v36.615zm15.688-28.852c2.31 0 4.082-1.77 4.082-4.13 0-2.358-1.77-4.127-4.08-4.127-2.362 0-4.133 1.77-4.133 4.128 0 2.36 1.772 4.128 4.133 4.128h-.002zM52.65 0l-3.744 35.142-6.39-29.628-20.026 4.2 6.384 29.625L0 45.39l5.1 23.664 50.777 10.64L67.49 53.98l5.528-51.867L52.65 0zM36.607 50.98c-1.048.946-2.433.86-3.9.377-1.467-.48-2.118-2.23-1.564-4.343.414-1.57 2.363-1.805 3.337-1.82.37-.007.734.066 1.07.216.69.308 1.856.964 2.093 1.965.34 1.444.012 2.657-1.035 3.602h-.002v.002zm14.7 1.63c-.76 1.304-2.758 1.476-4.722.528-1.324-.64-1.314-2.268-1.17-3.26.078-.543.298-1.052.642-1.482.473-.59 1.262-1.36 2.175-1.385 1.484-.04 2.76.617 3.482 1.804.724 1.184.362 2.49-.4 3.795h-.005z"
                fill="#00CDBD"
                fill-rule="evenodd"></path>
            </svg>
          </div>
        </div>
        <div class="RestaurantInfos">
          <div class="RestaurantInfos--center">
            <div class="RestaurantInfos--texts">
              <h1>Le Pain Quotidien - Montorgueil</h1>
              <p>
                Profitez de chaque plaisir de la vie quotidienne. Le Pain Quotidien propose des ingrédients simples et
                sains, du bon pain, des fruits et des légumes frais et de saison issus de l’agriculture biologique.
              </p>
            </div>
            <img
              class="RestaurantInfos--cover"
              src="https://f.roocdn.com/images/menus/17697/header-image.jpg"
              alt="restaurant cover"
            />
          </div>
        </div>
      </header>
      <div className="Content">
        <div className="Content--center">
          <div className="Menu">
            <div class="MenuItems">
              <h2>Brunchs</h2>
              <div class="MenuItems--items">
                <div class="MenuItem">
                  <div class="MenuItem--card">
                    <div class="MenuItem--texts">
                      <h3>Brunch authentique 1 personne</h3>
                      <p>
                        Assiette de jambon cuit, jambon fumeì, terrine, comté bio &amp; camembert bio, salade jeunes
                        pousses, oeuf poché bio, pain bio &amp; confiture, 1 viennoiserie bio au choix, granola parfait
                        bio, jus de fruits 33cl au choix
                      </p>
                      <div class="MenuItem--infos">
                        <span class="MenuItem--price">25,00 €</span>
                        <span class="MenuItem--popular">
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#ff8000"
                            class="feather feather-star"
                            style="width: 20px; height: 20px; margin-right: 5px;">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg> */}
                          Populaire
                        </span>
                      </div>
                    </div>
                    <div class="MenuItem--picture">
                      <img src="https://f.roocdn.com/images/menu_items/1583350/item-image.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div class="MenuItem">
                  <div class="MenuItem--card">
                    <div class="MenuItem--texts">
                      <h3>Brunch vegan</h3>
                      <p>
                        Falafels bio, houmous bio, avocat aux super graines bio, lentilles au paprika, herbes fraîches,
                        houmous de carotte et légumes de saison, soupe du jour bio, pain bio &amp; confiture, crunola
                        parfait aux fruits de saison, flûte aux raisins et noisettes, jus de fruits 33cl au choix
                      </p>
                      <div class="MenuItem--infos">
                        <span class="MenuItem--price">25,00 €</span>
                      </div>
                    </div>
                    <div class="MenuItem--picture">
                      <img src="https://f.roocdn.com/images/menu_items/3905693/item-image.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="MenuItems">
              <h2>Petit déjeuner</h2>
              <div class="MenuItems--items">
                <div class="MenuItem">
                  <div class="MenuItem--card">
                    <div class="MenuItem--texts">
                      <h3>Brunch authentique 1 personne</h3>
                      <p>
                        Assiette de jambon cuit, jambon fumeì, terrine, comté bio &amp; camembert bio, salade jeunes
                        pousses, oeuf poché bio, pain bio &amp; confiture, 1 viennoiserie bio au choix, granola parfait
                        bio, jus de fruits 33cl au choix
                      </p>
                      <div class="MenuItem--infos">
                        <span class="MenuItem--price">25,00 €</span>
                        <span class="MenuItem--popular">
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#ff8000"
                            class="feather feather-star"
                            style="width: 20px; height: 20px; margin-right: 5px;">
                            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                          </svg> */}
                          Populaire
                        </span>
                      </div>
                    </div>
                    <div class="MenuItem--picture">
                      <img src="https://f.roocdn.com/images/menu_items/1583350/item-image.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div class="MenuItem">
                  <div class="MenuItem--card">
                    <div class="MenuItem--texts">
                      <h3>Brunch vegan</h3>
                      <p>
                        Falafels bio, houmous bio, avocat aux super graines bio, lentilles au paprika, herbes fraîches,
                        houmous de carotte et légumes de saison, soupe du jour bio, pain bio &amp; confiture, crunola
                        parfait aux fruits de saison, flûte aux raisins et noisettes, jus de fruits 33cl au choix
                      </p>
                      <div class="MenuItem--infos">
                        <span class="MenuItem--price">25,00 €</span>
                      </div>
                    </div>
                    <div class="MenuItem--picture">
                      <img src="https://f.roocdn.com/images/menu_items/3905693/item-image.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div class="MenuItem">
                  <div class="MenuItem--card">
                    <div class="MenuItem--texts">
                      <h3>Brunch vegan</h3>
                      <p>
                        Falafels bio, houmous bio, avocat aux super graines bio, lentilles au paprika, herbes fraîches,
                        houmous de carotte et légumes de saison, soupe du jour bio, pain bio &amp; confiture, crunola
                        parfait aux fruits de saison, flûte aux raisins et noisettes, jus de fruits 33cl au choix
                      </p>
                      <div class="MenuItem--infos">
                        <span class="MenuItem--price">25,00 €</span>
                      </div>
                    </div>
                    <div class="MenuItem--picture">
                      <img src="https://f.roocdn.com/images/menu_items/3905693/item-image.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div class="MenuItem">
                  <div class="MenuItem--card">
                    <div class="MenuItem--texts">
                      <h3>Brunch vegan</h3>
                      <p>
                        Falafels bio, houmous bio, avocat aux super graines bio, lentilles au paprika, herbes fraîches,
                        houmous de carotte et légumes de saison, soupe du jour bio, pain bio &amp; confiture, crunola
                        parfait aux fruits de saison, flûte aux raisins et noisettes, jus de fruits 33cl au choix
                      </p>
                      <div class="MenuItem--infos">
                        <span class="MenuItem--price">25,00 €</span>
                      </div>
                    </div>
                    <div class="MenuItem--picture">
                      <img src="https://f.roocdn.com/images/menu_items/3905693/item-image.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="Cart">
            <div class="Cart--card">
              <button class="xCart--validate Cart--disabled">Valider mon panier</button>
              <div class="Cart--empty">Votre panier est vide</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
