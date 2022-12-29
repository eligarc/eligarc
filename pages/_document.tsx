import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {

	render() {
		return (
			<Html>
					{ /* favicon */ }
					{ /* Webfont */ }
					{ /* Estilos externos */ }
					{ /* Scripts externos */ }
				<Head>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
					<link rel="preconnect" href="https://cdnjs.cloudflare.com" />
					<link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;1,300;1,400&display=swap" rel="stylesheet" />
					<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" rel="stylesheet" />
				</Head>
				<body className="my-body-class">
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
