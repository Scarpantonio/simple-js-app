var repository = [
  { name: 'Bulbasaur', height: 0.7, types: ['grass', 'fire'] },
  { name: 'Cloyster', height: 1.5, types: ['ice', 'water'] },
  { name: 'Charmander', height: 0.6, types: ['fire'] },
  { name: 'Beedrill', height: 1, types: ['bug', 'poison'] },
  { name: 'Gloom', height: 0.8, types: ['grass', 'poison'] },
  { name: 'Gitmonlee', height: 1.5, types: ['fighting'] },
  { name: 'Combee', height: 0.3, types: ['bug', 'flying'] },
  { name: 'Tornadus', height: 1.5, types: ['flying'] },
  { name: 'Sawk', height: 1.4, types: ['fighting'] },
  { name: 'Onix', height: 8.8, types: ['rock', 'ground'] }
];

for (let i = 0; i < repository.length; i++) {
  let pokemon = repository[i];
  document.write(
    pokemon.name +
      ' ' +
      '(' +
      'height:' +
      ' ' +
      pokemon.height +
      ')' +
      '<br>' +
      '<br>'
  );
  if (pokemon.height > 5) {
    document.write("Wow, that's big!");
  }
}
