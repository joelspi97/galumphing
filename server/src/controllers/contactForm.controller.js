const contactFormController = {};

contactFormController.sendMessage = async (req, res) => {
  try {
    console.log(req.body);
    res.json({ message: 'Message sent successfully' });
  } catch (err) {
    console.error(`Could not send message: ${err}`);
  }
};

module.exports = contactFormController;
