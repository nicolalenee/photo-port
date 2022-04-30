import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {
  //update page title in the browser tab to reflect which tab the user has clicked on


  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  function categorySelected(name) {
    console.log(`${name} clicked`)
  }

  return(
    <div>
      <header>
        <h2>
          <a data-testid="link" href="/">
            <span role="img" aria-label="camera">
              {" "}
              📸
              </span>{" "}
              Oh Snap!
          </a>
        </h2>
        <nav>
          <ul className="flex-row">
            <li className="mx-2">
              <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
                About Me
              </a>
            </li>
            <li className={`mx-2 ${contactSelected && 'navActive'}`}>
              <span onClick={() => setContactSelected(true)}>Contact</span>
            </li>
            {categories.map((category) => 
            <li 
              className={`mx-1 ${
                currentCategory.name === category.name && !contactSelected && 'navActive'
              }`} 
              key={category.name}>

              <span 
                onClick={() => {
                  setCurrentCategory(category)
                  setContactSelected(false);
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>

            </li>
            )}
          </ul>
        </nav>

      </header>
    </div>
  )
}
export default Nav;