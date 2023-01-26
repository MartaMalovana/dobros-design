export const stylizovanaCentralna = state => state.stylizovanaCentralna;

export const stylizovanaCentralnaChildren = state =>
    state.stylizovanaCentralna.filter(el => el.children === 'true');