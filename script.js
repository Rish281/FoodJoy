document.addEventListener("DOMContentLoaded", () => {
  const videoPlayButton = document.getElementById("video-play-button")
  const videoModal = document.getElementById("video-modal")
  const videoContent = document.getElementById("video-content")
  const videoCloseButton = document.getElementById("video-close-button")

  // Open the Modal
  videoPlayButton.addEventListener("click", () => {
    videoModal.style.display = "block"

    // Create iframe for video
    const iframe = document.createElement("iframe")
    iframe.src = "https://drive.google.com/file/d/1YDKcg6Bu5rac23rGXErh5GO4x7cFRs-s/preview"
    iframe.width = "100%"
    iframe.height = "100%"
    iframe.allow = "autoplay"
    iframe.allowFullscreen = true

    videoContent.appendChild(iframe)
  })

  // Close the Modal
  videoCloseButton.addEventListener("click", () => {
    videoModal.style.display = "none"

    // Stop the video when the modal is closed
    const iframe = videoContent.querySelector("iframe")
    if (iframe) {
      iframe.remove()
    }
  })

  // Close the modal if the user clicks outside of it
  window.addEventListener("click", (event) => {
    if (event.target == videoModal) {
      videoModal.style.display = "none"

      // Stop the video when the modal is closed
      const iframe = videoContent.querySelector("iframe")
      if (iframe) {
        iframe.remove()
      }
    }
  })
})
