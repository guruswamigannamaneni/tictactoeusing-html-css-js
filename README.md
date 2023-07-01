# tictactoeusing-html-css-js
using only basics
HTML Structure: The HTML code defines the structure of the game board using nested <div> elements. Each cell of the Tic Tac Toe grid is represented by a <button> element with a unique id.

CSS Styling: The CSS code styles the game elements, such as setting the background color, font size, and alignment.

JavaScript Functionality:

read Function: This function is triggered when a cell button is clicked. It checks if the cell is already marked with "X" or "O". If not, it assigns the current player's mark ("X" or "O") to the cell and updates the arr array to keep track of the moves.
Checking for a Win: After each move, the code checks if there is a winning combination by comparing the values in the arr array. If a win is detected, it updates the game result on the page by changing the innerHTML of the element with the id "body" and adding padding.
Game Tie: If all cells are filled and no winning combination is found, the code determines that the game ends in a tie.
Error Display: If a player tries to mark an already occupied cell, the code displays an error message below the board.
Overall, the code allows two players to take turns marking the cells with "X" and "O". It keeps track of the moves, checks for a win or tie, and displays the game result on the page.
