import app from "./config/app.js";

async function main() {
    app.listen(app.get('port'));
    await console.log('Server running on port', app.get('port'))
}

main();