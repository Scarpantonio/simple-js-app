var pokemonRepository = (function() {
  var repository = [
    { name: 'Bulbasaur', height: 0.7, types: ['grass', 'fire'] },
    { name: 'Cloyster', height: 1.5, types: ['ice', 'water'] },
    { name: 'Tornadus', height: 1.5, types: ['flying'] },
    { name: 'Sawk', height: 1.4, types: ['fighting'] },
    { name: 'Onix', height: 8.8, types: ['rock', 'ground'] }
  ];

  function getAll() {
    return repository;
  }

  function add(pokemon) {
    repository.push(pokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };

  function addListItem(pokemon = {}) {
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

  function showDetails(pokemon) {
    console.log(pokemon);
  }
})();

console.log(pokemonRepository.getAll());

var newPokemon = { name: 'Charmander', height: 0.6, types: ['fire'] };
pokemonRepository.add(newPokemon);

console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});

// for (let i = 0; i < repository.length; i++) {
//   let pokemon = repository[i];
//   if (pokemon.height > 5) {
//     document.write(
//       pokemon.name +
//         ' ' +
//         '(' +
//         'height:' +
//         ' ' +
//         pokemon.height +
//         ')' +
//         ' -' +
//         ' ' +
//         "Wow, that's big!"
//     );
//   } else {
//     document.write(
//       pokemon.name +
//         ' ' +
//         '(' +
//         'height:' +
//         ' ' +
//         pokemon.height +
//         ')' +
//         '<br>' +
//         '<br>'
//     );
//   }
// }
