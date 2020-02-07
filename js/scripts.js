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
    getAll: getAll
  };
})();

console.log(pokemonRepository.getAll());
pokemonRepository.add({ name: 'Tornadus', height: 1.5, types: ['flying'] });
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon) {
  if (pokemon.height > 5) {
    document.write(
      pokemon.name +
        ' ' +
        '(' +
        'height' +
        ' ' +
        pokemon.height +
        ')' +
        ' - ' +
        "Wow, that's big!" +
        '<br>' +
        '<br>'
    );
  } else {
    document.write(
      pokemon.name +
        ' ' +
        '(' +
        'height' +
        ' ' +
        pokemon.height +
        ')' +
        '<br>' +
        '<br>'
    );
  }
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
