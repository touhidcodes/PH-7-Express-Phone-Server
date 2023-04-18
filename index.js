const express = require("express");
const phones = require("./phones.json");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
	res.send("My Phones information coming soon...");
});

app.get("/phones", (req, res) => {
	res.send(phones);
});
app.get("/phone/:id", (req, res) => {
	const id = parseInt(req.params.id);
	const phone = phones.find((phone) => phone.id === id);
	res.send(phone);
});

app.listen(port, () => {
	console.log(`Server running on port ${port}`);
});
