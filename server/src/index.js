
import app from './app';

// this is just a fallback for now
app.get('/', (req, res) => {
  res.status(200).send('Hello World!');
});

app.listen(process.env.PORT, () => {
  console.log(`Running on localhost:${process.env.PORT}`);
});
