import { gapi } from 'gapi-script';

export default async function handler(req, res) {
  const { API_KEY, CLIENT_ID, FOLDER_ID } = process.env;

  if (req.method === 'GET') {
    try {
      // Initialize the gapi client
      await gapi.load('client:auth2', () => {
        gapi.client.init({
          apiKey: API_KEY,
          clientId: CLIENT_ID,
          discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"],
          scope: "https://www.googleapis.com/auth/drive.readonly",
        });
      });

      // Fetch files from the specified folder
      const response = await gapi.client.drive.files.list({
        q: `'${FOLDER_ID}' in parents`,
        fields: "nextPageToken, files(id, name, mimeType, webViewLink, webContentLink)",
      });

      res.status(200).json(response.result.files);
    } catch (error) {
      console.error("Error fetching files:", error.message);
      console.error("Full error object:", error);
      res.status(500).json({ error: "Failed to fetch resources", details: error.message });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}