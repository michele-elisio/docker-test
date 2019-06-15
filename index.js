const exp4ee = require ('express');
const app = express();

app.get('/', (req, res) => {
    res.send('A bello');
});

app.listen(8080, () => {
    console.log('In ascolto.....8080')
})
