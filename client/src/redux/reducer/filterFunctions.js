export function sortVideoGamesByRating(videoGames, option) {
  const sortedVideoGames = [...videoGames];

  sortedVideoGames.sort((a, b) => {
    if (option === 1) {
      return a.rating - b.rating; // Ordenar de menor a mayor (low rating)
    } else {
      return b.rating - a.rating; // Ordenar de mayor a menor (high rating)
    }
  });

  return sortedVideoGames;
}

export function sortVideoGamesAlphabetically(videoGames, option) {
  const sortedVideoGames = [...videoGames];

  sortedVideoGames.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {
      return option === 0 ? -1 : 1; // Ascending or descending based on option
    }
    if (nameA > nameB) {
      return option === 0 ? 1 : -1; // Ascending or descending based on option
    }
    return 0;
  });

  return sortedVideoGames;
}

export function filterVideoGamesByOrigin(videoGames, option) {
  return videoGames.reduce((filteredVideoGames, game) => {
    if (
      (option === 1 && typeof game.id === "number") ||
      (option === 0 && typeof game.id === "string")
    ) {
      filteredVideoGames.push(game);
    }
    return filteredVideoGames;
  }, []);
}

export function filterVideoGamesByGenre(videoGames, option) {
  return videoGames.filter((videogame) => videogame.genres.includes(option));
}
