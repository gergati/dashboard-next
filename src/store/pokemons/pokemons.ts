import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SimplePokemon } from '../../pokemons/interfaces/simple-pokemon';

interface PokemonsState {
    favorites: { [key: string]: SimplePokemon }
}
const getInitialState = (): PokemonsState => {
    // if (typeof localStorage === 'undefined') return {};
    const favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')
    return favorites;
}

const initialState: PokemonsState = {
    favorites: {},
    // ...getInitialState()
    // '1': { id: '1', name: 'bulbasur' },
    // '3': { id: '3', name: 'venusaur' }
}

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        setFavoritePokemons(state, action: PayloadAction<{ [key: string]: SimplePokemon }>) {
            state.favorites = action.payload
        },
        toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
            const pokemon = action.payload
            const { id } = pokemon
            if (!!state.favorites[id]) {
                delete state.favorites[id]
                // return;
            } else {
                state.favorites[id] = pokemon
            }
            //TODO: No se debe hacer en Redux
            localStorage.setItem('favorite-pokemons', JSON.stringify(state.favorites))
        }
    }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer