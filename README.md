
# Python Flask AI Chatbot

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white) ![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white) ![AI Chatbot](https://img.shields.io/badge/AI%20Chatbot-776AB7?style=for-the-badge) ![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

A dynamic and responsive AI Chatbot built with Python, Flask, and neural networks. Designed to handle inquiries about services, bookings, and customer support with ease and accuracy.

## Features

- **Real-time Interaction**: Engage with users through a conversational interface.
- **Custom Neural Network**: Powered by a bespoke model for natural language understanding.
- **Easy Integration**: Seamless incorporation into websites or applications.
- **Scalable & Flexible**: Designed to grow with your business needs.
- **API Testing with Postman**: Easily test and interact with the chatbot API.

## Installation

1. **Clone the Repository**

    ```bash
    git gh repo clone Gayan-Sachintha/Riverston-Life-AI-Chatbot-flask
    cd yourprojectname
    ```

2. **Create a Virtual Environment (Optional)**

    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install Requirements**

    ```bash
    pip install -r requirements.txt
    ```

4. **Set Up Environment Variables**

    Create a `.env` file in the project root directory and add the necessary configurations.

## Usage

Start the server with the following command:

```bash
python app.py
```

The chatbot is now live at `http://localhost:5000/`. Interact with the chatbot through the provided endpoints.

## Testing with Postman

To test the chatbot API with Postman, follow these steps:

1. **Install Postman**

   Download and install Postman from [the official site](https://www.postman.com/downloads/).

2. **Import Collection**

   Create a new collection in Postman for your chatbot APIs.

3. **Create a POST Request**

   - URL: `http://localhost:5000/predict`
   - Body type: `raw` (JSON)
   - Request Body Example: `{"message": "Hello"}`

4. **Send Request**

   Hit the send button to receive a response from your chatbot.

This setup allows you to easily test and debug your chatbot's responses.

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-yourfeaturename`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-yourfeaturename`.
5. Submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details.

## Contact

For support or inquiries, reach out to us at `gayansachintha2000@gmail.com`.

---

