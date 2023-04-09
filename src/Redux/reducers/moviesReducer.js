import { ADD_MOVIE, DELETE_MOVIE } from "../actionsTypes/moviesActions";

const initialState = {
    movies: [
        {
            id: 1,
            name: 'Nike Slim Shirt',
            category: 'Shirts',
            image: '/images/p1.jpg',
            price: 120,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 10,
            description: 'high quality movie',
        },
        {
            id: 2,
            name: 'Adidas Fit Shirt',
            category: 'Shirts',
            image: '/images/p2.jpg',
            price: 100,
            brand: 'Adidas',
            rating: 4.0,
            numReviews: 10,
            description: 'high quality movie',
        },

        {
            id: 3,
            name: 'Lacoste Free Shirt',
            category: 'Shirts',
            image: '/images/p3.jpg',
            price: 220,
            brand: 'Lacoste',
            rating: 4.8,
            numReviews: 17,
            description: 'high quality movie',
        },
        {
            id: 4,
            name: 'Nike Slim Pant',
            category: 'Pants',
            image: '/images/p4.jpg',
            price: 78,
            brand: 'Nike',
            rating: 4.5,
            numReviews: 14,
            description: 'high quality movie',
        }],
};


export const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MOVIE:
            return {
                ...state,
                movies: [...state.movies, action.payload],
            };
        case DELETE_MOVIE:
            return {
                ...state,
                movies: state.movies.filter((movie) => movie.id !== action.payload),
            };
        default:
            return state;

    }
}