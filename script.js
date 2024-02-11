document.addEventListener("DOMContentLoaded", function () {
    const tweetContainer = document.getElementById("tweetContainer");

    // Sample tweets with images
    const tweets = [
        { text: "Lorem ipsum dolor sit amet.", image: "image1.jpg" },
        { text: "Consectetur adipiscing elit.", image: "image2.jpg" },
        { text: "Sed do eiusmod tempor incididunt.", image: "image3.jpg" },
        { text: "Ut labore et dolore magna aliqua.", image: "image4.jpg" },
    ];

    tweets.forEach((tweet) => {
        const tweetDiv = document.createElement("div");
        tweetDiv.className = "tweet";

        const tweetText = document.createElement("p");
        tweetText.textContent = tweet.text;

        const tweetImage = document.createElement("img");
        tweetImage.src = tweet.image;

        tweetDiv.appendChild(tweetText);
        tweetDiv.appendChild(tweetImage);

        tweetContainer.appendChild(tweetDiv);
    });
});
