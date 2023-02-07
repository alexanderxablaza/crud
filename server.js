import EXPRESS from 'express';
import APP from EXPRESS;
import path from 'path';
const PORT = process.env.PORT || 3000;

APP.get('/', (request, response) => {
    response.send("Crud app");
});

APP.listen(PORT, () => {
    console.log(`Server running on ${path}:${PORT}`);
});