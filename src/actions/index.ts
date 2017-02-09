export const selectMovie = (url: string, title?: string) => ({type: 'SELECT_MOVIE', selected: {title, url}});
export const showPlayer = () => ({type: 'SHOW_PLAYER'});
export const hidePlayer = () => ({type: 'HIDE_PLAYER'});
