import React, { useState } from 'react';
import { Box, Button, Grid, GridItem } from '@chakra-ui/react';

const OthelloGame = () => {
  const [board, setBoard] = useState(Array(8).fill(Array(8).fill(null)));

  const handleCellClick = (row, col) => {
    // Placeholder for game logic
    console.log(`Clicked on row ${row}, col ${col}`);
  };

  return (
    <Box>
      <Grid templateColumns="repeat(8, 1fr)" gap={1}>
        {board.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <GridItem key={`${rowIndex}-${colIndex}`} w="40px" h="40px" bg="green.500" onClick={() => handleCellClick(rowIndex, colIndex)}>
              {cell}
            </GridItem>
          ))
        )}
      </Grid>
    </Box>
  );
};

export default OthelloGame;