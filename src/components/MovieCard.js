import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const MovieCard = ({ movie, onClick }) => {
    return (
        <Card onClick={() => onClick(movie)}>
            <CardMedia
                component="img"
                height="140"
                image={movie.poster}
                alt={movie.title}
            />
            <CardContent>
                <Typography variant="h6">{movie.title}</Typography>
            </CardContent>
        </Card>
    );
};

export default MovieCard;
