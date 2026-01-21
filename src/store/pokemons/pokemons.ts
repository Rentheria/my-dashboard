import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PokemonsState {
  favorites: { [key: string]: SimplePokemon };
}

// const getInitialState = (): PokemonsState => {
//   const favoritePokemons = JSON.parse(
//     localStorage.getItem('favorite-pokemons') ?? '{}',
//   );
//   return { favorites: favoritePokemons };
// };

const initialState: PokemonsState = {
  favorites: {},
  // getInitialState();
};

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<SimplePokemon>) => {
      const pokemon = action.payload;
      if (state.favorites[pokemon.id]) {
        delete state.favorites[pokemon.id];
        return;
      }
      state.favorites[pokemon.id] = pokemon;

      localStorage.setItem(
        'favorite-pokemons',
        JSON.stringify(state.favorites),
      );
    },
    setFavoritePokemons: (
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>,
    ) => {
      state.favorites = action.payload;
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions;

export default pokemonsSlice.reducer;
