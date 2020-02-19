var pokemonRepository = (function() {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

  function addListItem(pokemon) {
    var pokemonList = document.querySelector('.pokemon-list');
    var $listItem = document.createElement('li');
    var button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('my-class');
    $listItem.appendChild(button);
    pokemonList.appendChild($listItem);
    button.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function() {
      console.log(item);
      showModal(item);
    });
  }

  function loadList() {
    return fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        json.results.forEach(function(item) {
          var pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
          console.log(pokemon);
        });
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(details) {
        // Now we add the details to the item
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        // loop for each of the pokemon types
        item.types = [];
        for (var i = 0; i < details.types.length; i++) {
          item.types.push(details.types[i].type.name);
        }

        //loop to get the abilities of a selected pokemon
        item.abilities = [];
        for (var i = 0; i < details.abilities.length; i++) {
          item.abilities.push(details.abilities[i].ability.name);
          // item.abilities.push('slot: ' + details.abilities[i].slot);
          // item.abilities.push('is_hidden: ' + details.abilities[i].is_hidden);
        }

        item.weight = details.weight;
      })
      .catch(function(e) {
        console.error(e);
      });
  }
  // Show modal content
  function showModal(item) {
    var $modalContainer = document.querySelector('#modal-container');
    // Clear existing modal content
    $modalContainer.innerHTML = '';
    // Creating div element in DOM
    var modal = document.createElement('div');
    // adding class to div DOM element
    modal.classList.add('modal');
    // create closing button in modal content
    var closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    // Add event listener to close modal when botton is clicked
    closeButtonElement.addEventListener('click', hideModal);
    // Create element for name in modal content
    var nameElement = document.createElement('h1');
    nameElement.innerText = item.name;
    // Create img in modal content
    var imageElement = document.createElement('img');
    imageElement.classList.add('modal-img');
    imageElement.setAttribute('src', item.imageUrl);
    // Create element for height in modal content
    var heightElement = document.createElement('p');
    heightElement.innerText = 'height : ' + item.height + 'm';
    // create element for weight in modal content
    var weightElement = document.createElement('p');
    weightElement.innerText = 'weight : ' + item.weight + 'kg';
    // Create element for type in modal content
    var typesElement = document.createElement('p');
    typesElement.innerText = 'types : ' + item.types;
    // Create element for abilities in modal content
    var abilitiesElement = document.createElement('p');
    abilitiesElement.innerText = 'abilities : ' + item.abilities;

    // Append modal content to webpage
    modal.appendChild(closeButtonElement);
    modal.appendChild(nameElement);
    modal.appendChild(imageElement);
    modal.appendChild(heightElement);
    modal.appendChild(weightElement);
    modal.appendChild(typesElement);
    modal.appendChild(abilitiesElement);
    $modalContainer.appendChild(modal);

    // Add class to show modal
    $modalContainer.classList.add('is-visible');
  }

  // hides modal when close button is clicked
  function hideModal() {
    var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.classList.remove('is-visible');
  }

  // Hides model when ESC is clicked
  window.addEventListener('keydown', e => {
    var $modalContainer = document.querySelector('#modal-container');
    if (
      e.key === 'Escape' &&
      $modalContainer.classList.contains('is-visible')
    ) {
      hideModal();
    }
  });

  // Hides modal if clicked outside of it
  var $modalContainer = document.querySelector('#modal-container');
  $modalContainer.addEventListener('click', e => {
    var target = e.target;
    if (target === $modalContainer) {
      hideModal();
    }
  });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    hideModal: hideModal
  };
})();

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
