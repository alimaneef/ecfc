import React, { useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import MovieCard from './components/MovieCard';
import VideoPlayer from './components/VideoPlayer';
import movies from './moviesData';
import './App.css';

function App() {
    const [selectedMovie, setSelectedMovie] = useState(null);

    const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    };

    return (
        <Container>
            <Typography variant="h3" align="center" gutterBottom>
                PrimeVision
            </Typography>
            {selectedMovie ? (
                <VideoPlayer movie={selectedMovie} />
            ) : (
                <Grid container spacing={4}>
                    {movies.map((movie, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <MovieCard movie={movie} onClick={handleMovieClick} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Container>
    );
}

export default App;
