const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '86421efd35edc44b9a51f86f2a41abed',
    originalImage: (imgPath: string) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath: string) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;