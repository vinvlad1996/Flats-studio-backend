import { MailService } from "../service/index.js";

class SendController {
  send = async (req, res) => {
    const { username, phone } = req.body;

    const newMailService = new MailService();
      await newMailService
        .sendCode({ username, phone })
        .then(() => {
          return res.json('Success');
        })
        .catch((error) => {
          return res.status(500).json({ error });
        });
  };
}

export default SendController;
