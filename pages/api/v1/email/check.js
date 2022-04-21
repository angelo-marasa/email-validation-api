// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	if (req.method === "POST") {
		const regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
		res.status(200).json({ status: regex.test(req.body.email) });
	} else {
		// Handle any other HTTP method
		res.status(405).send({ error: "Method not allowed" });
	}
}
