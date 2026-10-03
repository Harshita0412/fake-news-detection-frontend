📰 Fake News Detection using RNN/LSTM

An AI-powered web application that analyzes news article text and predicts whether an article is **likely fake or real** using a deep learning-based Natural Language Processing (NLP) model.

The project combines an interactive web frontend, a Flask REST API, and a trained RNN/LSTM model to provide real-time predictions.


🚀 1. Live Demo

👉 **[Try the Live Application](https://fake-news-detection-frontend-j635.onrender.com/)**


📌 2. Project Overview

Fake news can spread rapidly through online platforms, making it difficult for readers to distinguish between reliable and misleading information.

This project demonstrates the use of **Natural Language Processing (NLP)** and **Deep Learning** to analyze the textual content of news articles and classify them as:

🟢 **Likely Real**
🔴 **Likely Fake**

Users can enter or paste a news article into the web application and receive a prediction along with the model's confidence score.

The frontend communicates with a deployed Flask REST API, which processes the article and sends it to the trained RNN/LSTM model for classification.

🧠 3. How It Works

The application follows this workflow:

```text
User enters news article
          ↓
Frontend sends article to API
          ↓
Flask REST API receives the request
          ↓
Text is processed using the trained tokenizer
          ↓
Text is converted into numerical sequences
          ↓
Sequences are padded to the required length
          ↓
RNN/LSTM model generates prediction
          ↓
Prediction + confidence returned
          ↓
Frontend displays the result
```
## 🛠️ 4. Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- Responsive UI

### Backend
- Python
- Flask
- REST API
- Gunicorn

### Machine Learning
- TensorFlow
- Keras
- RNN/LSTM
- Natural Language Processing (NLP)
- Tokenization
- Sequence Padding

### Model Hosting
- Hugging Face
- Render

### Version Control
- Git
- GitHub

## 🤖 5. Machine Learning Model

The project uses a deep learning model based on **Recurrent Neural Networks (RNN)** with **LSTM architecture** for text classification.

The model was trained to analyze textual patterns in news articles and classify the input as either likely real or likely fake.

The model uses:

- Text tokenization
- Numerical sequence conversion
- Sequence padding
- LSTM-based text processing
- Binary classification

The trained model is hosted on Hugging Face and loaded by the Flask API when required.

## ✨ 6. Features

- 📰 News article text classification
- 🤖 RNN/LSTM-based prediction
- 📊 Confidence score
- ⚡ Real-time API prediction
- 🌐 Interactive web interface
- 🔌 REST API integration
- ☁️ Cloud deployment
- 📱 Responsive frontend
- 🔄 Sample article testing
- ❤️ Simple and user-friendly interface

## 🖥️ 7. User Interface / Example Output

The frontend provides a simple interface where users can:

1. Enter or paste a news article.
2. Submit the article for analysis.
3. Wait for the model prediction.
4. View the predicted classification.
5. View the model confidence score.

Example output:

```text
Prediction: LIKELY FAKE
Model Confidence: 54.17%
```

The confidence score represents how strongly the trained model leans toward its prediction. It does not guarantee that the article is factually true or false.

## 🔌 8. Backend API

The backend is implemented using Flask and exposes REST API endpoints.

### Health Check

```text
GET /health
```

Example response:

```json
{
  "status": "healthy",
  "model_loaded": true
}
```

### Prediction

```text
POST /predict
```

Request:

```json
{
  "article": "Your news article text goes here."
}
```

Response:

```json
{
  "prediction": "FAKE",
  "confidence": 54.17
}
```

## ☁️ 9. Model Hosting

The trained machine learning model is hosted on **Hugging Face**.

The Flask backend downloads the trained model when required and uses it to generate predictions.

This keeps the model separate from the frontend and allows the application to communicate with the deployed machine learning service through an API.

## 🏗️ 10. Project Architecture

```text
                    ┌─────────────────────┐
                    │       User          │
                    │   News Article      │
                    └──────────┬──────────┘
                               │
                               ↓
                    ┌─────────────────────┐
                    │      Frontend       │
                    │ HTML / CSS / JS     │
                    └──────────┬──────────┘
                               │
                         HTTP Request
                               │
                               ↓
                    ┌─────────────────────┐
                    │     Flask API       │
                    │      Backend        │
                    └──────────┬──────────┘
                               │
                               ↓
                    ┌─────────────────────┐
                    │ Tokenizer +         │
                    │ Text Preprocessing  │
                    └──────────┬──────────┘
                               │
                               ↓
                    ┌─────────────────────┐
                    │    RNN / LSTM       │
                    │   ML Model          │
                    └──────────┬──────────┘
                               │
                               ↓
                    ┌─────────────────────┐
                    │ Prediction +        │
                    │ Confidence Score    │
                    └──────────┬──────────┘
                               │
                               ↓
                    ┌─────────────────────┐
                    │ Frontend Result     │
                    └─────────────────────┘
```

## 📁 11. Project Structure

### Frontend Repository

```text
fake-news-detection-frontend/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### Backend Repository

```text
fake-news-detection-api/
│
├── app.py
├── requirements.txt
├── tokenizer.pkl
└── README.md
```

## 🚀 12. Deployment

The application is deployed using **Render**.

### Frontend Deployment

The frontend is deployed as a Render Static Site.

The repository is connected directly to Render, allowing the frontend to be deployed from the GitHub repository.

### Backend Deployment

The Flask backend is deployed as a Render Web Service.

The backend runs using Gunicorn and communicates with the trained machine learning model hosted on Hugging Face.

## 🔗 13. Related Repositories

### Frontend

GitHub repository:

```text
https://github.com/Harshita0412/fake-news-detection-frontend
```

### Backend API

GitHub repository:

```text
https://github.com/Harshita0412/fake-news-detection-api
```

### Machine Learning Model

Hugging Face model repository:

```text
https://huggingface.co/harshitamishra04/fake-news-detection-lstm
```

## 🎯 14. Project Objectives

The main objectives of this project are:

- To demonstrate the application of NLP in news classification.
- To build a deep learning-based text classification system.
- To integrate a trained ML model with a Flask REST API.
- To create an interactive frontend for model predictions.
- To understand the process of deploying ML applications.
- To demonstrate end-to-end integration between frontend, backend, and machine learning components.

## 🔮 15. Future Improvements

Possible improvements include:

- Improving model accuracy through additional training data.
- Experimenting with Transformer-based models such as BERT.
- Adding news source verification.
- Adding URL-based article extraction.
- Providing explainable AI insights.
- Improving confidence calibration.
- Adding multilingual news classification.
- Adding a database for prediction history.
- Improving frontend accessibility and user experience.

## ⚠️ 16. Disclaimer

This project is developed for **educational and demonstration purposes**.

The prediction generated by the model should not be treated as definitive proof that a news article is fake or real.

The confidence score represents the model's confidence in its classification based on patterns learned during training. Users should independently verify important information using reliable sources.

## 👩‍💻 17. Author

**Harshita Mishra**

Engineering Student | AI/ML & Software Development

Interested in:

- Artificial Intelligence
- Machine Learning
- Natural Language Processing
- Full-Stack Development
- Data & Technology


⭐ If you find this project interesting, feel free to explore the repositories and the live application.
