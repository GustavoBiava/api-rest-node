import app from './app';

const port = 3000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
  console.log(`Escutando na porta: ${port}`);
});
