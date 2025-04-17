document.addEventListener("DOMContentLoaded", () => {
  // Set current year in footer
  document.getElementById("current-year").textContent = new Date().getFullYear()

  // Tab functionality
  const tabButtons = document.querySelectorAll(".tab-btn")
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const tabId = button.getAttribute("data-tab")

      // Remove active class from all tabs and content
      document.querySelectorAll(".tab-btn").forEach((btn) => btn.classList.remove("active"))
      document.querySelectorAll(".tab-content").forEach((content) => content.classList.remove("active"))

      // Add active class to clicked tab and corresponding content
      button.classList.add("active")
      document.getElementById(`${tabId}-tab`).classList.add("active")
    })
  })

  // Modal functionality
  const modal = document.getElementById("subscription-modal")
  const subscribeButtons = document.querySelectorAll(".subscribe-btn")
  const closeModal = document.querySelector(".close-modal")

  subscribeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const plan = button.getAttribute("data-plan")
      if (plan) {
        document.querySelector(`input[value="${plan}"]`).checked = true
      }
      modal.classList.add("active")
    })
  })

  closeModal.addEventListener("click", () => {
    modal.classList.remove("active")
  })

  // Close modal when clicking outside
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("active")
    }
  })

  // Form submission
  const subscriptionForm = document.getElementById("subscription-form")
  subscriptionForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const plan = document.querySelector('input[name="plan"]:checked').value

    // Show toast notification
    showToast(`Thank you ${name}! We'll contact you about your ${plan} subscription.`)

    // Close modal and reset form
    modal.classList.remove("active")
    subscriptionForm.reset()
  })

  // Video play button
  const playBtn = document.querySelector(".play-btn")
  const videoPlaceholder = document.querySelector(".video-placeholder")

  if (playBtn) {
    playBtn.addEventListener("click", () => {
      const videoContainer = document.querySelector(".video-container")
      videoPlaceholder.style.display = "none"

      // Create iframe for video
      const iframe = document.createElement("iframe")
      iframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
      iframe.width = "100%"
      iframe.height = "100%"
      iframe.allow = "autoplay"
      iframe.allowFullscreen = true

      videoContainer.appendChild(iframe)
    })
  }

  // Toast notification
  function showToast(message) {
    const toast = document.getElementById("toast")
    const toastMessage = document.getElementById("toast-message")

    toastMessage.textContent = message
    toast.classList.add("active")

    setTimeout(() => {
      toast.classList.remove("active")
    }, 5000)
  }
})
