
import express from 'express';
import cards from './DB.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());


app.get('/cards', async (req, res) => {
    res.json(cards);
});

app.get('/cards/:id', async (req, res) => {
    const card = cards.find((c) => c.id === req.params.id);
    if (!card) return res.status(404).send('Card not found');
    res.json(card);
});

app.post('/cards', async (req, res) => {
    const newCard = req.body;
    newCard.id = Math.random().toString(36).substring(2) + (new Date()).getTime().toString(36);;
    cards.push(newCard);
    res.status(201).json(newCard);
});

app.patch('/cards/:id', async (req, res) => {
    const cardIndex = cards.findIndex((c) => c.id === req.params.id);
    if (cardIndex === -1) return res.status(404).send('Card not found');
    const updatedCard = { ...cards[cardIndex], ...req.body };
    cards[cardIndex] = updatedCard;
    res.json(updatedCard);
});

app.delete('/cards/:id', async (req, res) => {
    const cardIndex = cards.findIndex((c) => c.id === req.params.id);
    if (cardIndex === -1) return res.status(404).send('Card not found');
    cards.splice(cardIndex, 1);
    res.send({ message: 'Card deleted successfully' });
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});