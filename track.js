function trackActivity(action, extraData = "") {
    fetch("track.php", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
            action: action,
            page_url: window.location.pathname,
            extra_data: extraData
        })
    });
}

// Track page view automatically
document.addEventListener("DOMContentLoaded", () => {
    trackActivity("page_view");
});

// Track clicks
document.addEventListener("click", (e) => {
    if (e.target.tagName === "A" || e.target.tagName === "BUTTON") {
        let label = e.target.innerText || e.target.href || "Unknown";
        trackActivity("click", label);
    }
});

// Example: Track video events
document.querySelectorAll("video").forEach(video => {
    video.addEventListener("play", () => trackActivity("video_play", video.src));
    video.addEventListener("pause", () => trackActivity("video_pause", video.src));
});

// Example: Track quiz attempt (call this in your quiz submit function)
function trackQuiz(score) {
    trackActivity("quiz_attempt", "Score: " + score);
}
