const API_URL =
    "https://fake-news-detection-api-6byc.onrender.com/predict";

const articleInput = document.getElementById("article");
const predictBtn = document.getElementById("predictBtn");
const sampleBtn = document.getElementById("sampleBtn");

const wordCount = document.getElementById("wordCount");
const charCount = document.getElementById("charCount");

const result = document.getElementById("result");
const prediction = document.getElementById("prediction");
const confidence = document.getElementById("confidence");
const confidenceFill = document.getElementById("confidenceFill");

const errorBox = document.getElementById("errorBox");

const buttonText = document.getElementById("buttonText");
const loader = document.getElementById("loader");


// --------------------------------------------------
// Sample article
// --------------------------------------------------

const sampleArticle = `
Scientists have announced a new study examining the effects of
artificial intelligence on modern healthcare systems.

Researchers analyzed data from multiple hospitals and reported
that AI-assisted tools may help doctors identify certain patterns
more efficiently.

The researchers said the technology is intended to support
healthcare professionals rather than replace them.
`;


// --------------------------------------------------
// Update article statistics
// --------------------------------------------------

function updateStats() {

    const text = articleInput.value.trim();

    const words = text
        ? text.split(/\s+/).length
        : 0;

    wordCount.textContent =
        `${words} ${words === 1 ? "word" : "words"}`;

    charCount.textContent =
        `${articleInput.value.length.toLocaleString()} / 10,000`;
}


// --------------------------------------------------
// Article input listener
// --------------------------------------------------

articleInput.addEventListener("input", updateStats);


// --------------------------------------------------
// Load sample article
// --------------------------------------------------

sampleBtn.addEventListener("click", () => {

    articleInput.value = sampleArticle.trim();

    updateStats();

    result.classList.add("hidden");
    errorBox.classList.add("hidden");

});


// --------------------------------------------------
// Show error
// --------------------------------------------------

function showError(message) {

    errorBox.textContent = message;

    errorBox.classList.remove("hidden");

}


// --------------------------------------------------
// Hide error
// --------------------------------------------------

function hideError() {

    errorBox.classList.add("hidden");

    errorBox.textContent = "";

}


// --------------------------------------------------
// Loading state
// --------------------------------------------------

function setLoading(isLoading) {

    predictBtn.disabled = isLoading;

    if (isLoading) {

        buttonText.textContent = "Analyzing Article...";
        loader.classList.remove("hidden");

    } else {

        buttonText.textContent = "Classify Article";
        loader.classList.add("hidden");

    }

}


// --------------------------------------------------
// Display prediction
// --------------------------------------------------

function displayResult(data) {

    const predictedLabel =
        String(data.prediction || "").toUpperCase();

    const confidenceValue =
        Number(data.confidence);

    prediction.textContent =
        predictedLabel === "FAKE"
            ? "LIKELY FAKE"
            : "LIKELY REAL";

    confidence.textContent =
        `${confidenceValue.toFixed(2)}%`;

    confidenceFill.style.width =
        `${Math.min(Math.max(confidenceValue, 0), 100)}%`;

    result.classList.remove("hidden");

}


// --------------------------------------------------
// Classify article
// --------------------------------------------------

predictBtn.addEventListener("click", async () => {

    hideError();

    const article =
        articleInput.value.trim();


    // Validate input

    if (!article) {

        showError(
            "Please paste a news article before running the prediction."
        );

        articleInput.focus();

        return;
    }


    // Minimum text check

    if (article.length < 30) {

        showError(
            "Please enter a longer article for a more meaningful prediction."
        );

        articleInput.focus();

        return;
    }


    setLoading(true);

    result.classList.add("hidden");


    try {

        const response =
            await fetch(API_URL, {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    article: article
                })

            });


        let data;

        try {

            data = await response.json();

        } catch {

            throw new Error(
                "The API returned an invalid response."
            );

        }


        if (!response.ok) {

            throw new Error(
                data.error ||
                `API request failed with status ${response.status}.`
            );

        }


        if (
            typeof data.prediction !== "string" ||
            typeof data.confidence !== "number"
        ) {

            throw new Error(
                "The API response did not contain a valid prediction."
            );

        }


        displayResult(data);


    } catch (error) {

        console.error("Prediction error:", error);

        showError(
            error.message ||
            "Unable to connect to the prediction API. Please try again."
        );

    } finally {

        setLoading(false);

    }

});


// --------------------------------------------------
// Initial statistics
// --------------------------------------------------

updateStats();
