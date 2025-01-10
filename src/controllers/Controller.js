import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const apiBaseUrl = process.env.API_URL;
const apiKey = process.env.KEY;

export const fetchPhotos = async (req, res) => {
  const url = `${apiBaseUrl}?key=${apiKey}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar fotos do Pixabay' });
  }
};