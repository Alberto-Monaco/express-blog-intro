const posts = [
	{
		titolo: 'La montagna',
		contenuto: 'viaggio tra le montagne',
		immagine: '/img/montagna.jpg',
		tags: ['natura', 'avventura', 'trekking']
	},
	{
		titolo: 'La carbonara',
		contenuto: 'ricette di cucina',
		immagine: '/img/carbonara.jpg',
		tags: ['cucina', 'ricette', 'pasta']
	},
	{
		titolo: 'Viaggio a Parigi',
		contenuto: 'Parigi',
		immagine: '/img/parigi.jpg',
		tags: ['viaggi', 'francia', 'cultura']
	},
	{
		titolo: 'Harry Potter',
		contenuto: 'Storia di un mago',
		immagine: '/img/harry.jpg',
		tags: ['libri', 'fantasia', 'magia']
	},
	{
		titolo: 'Programmare',
		contenuto: 'javascript',
		immagine: '/img/javascript.jpg',
		tags: ['programmazione', 'javascript', 'tutorial']
	}
]

function index(req, res) {
	res.json({
		posts: posts,
		total: posts.length
	})
}

module.exports = {
	index
}
