// document.addEventListener("DOMContentLoaded", function () {
//     const slides = document.querySelectorAll(".video-slide");

//     let isDragging = false;

//     slides.forEach((slide) => {
//         slide.addEventListener("mousedown", () => (isDragging = false));
//         slide.addEventListener("mousemove", () => (isDragging = true));
//         slide.addEventListener("mouseup", function () {
//             if (isDragging) return; // Prevent click event when dragging

//             const video = this.querySelector(".video");
//             if (!video) return;

//             const isPlaying = !video.paused && !video.ended;

//             slides.forEach((s) => {
//                 const otherVideo = s.querySelector(".video");
//                 if (otherVideo && otherVideo !== video) {
//                     otherVideo.pause();
//                     s.classList.remove("playing");
//                 }
//             });

//             if (isPlaying) {
//                 video.pause();
//                 this.classList.remove("playing");
//             } else {
//                 video.play();
//                 this.classList.add("playing");
//             }
//         });
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".video-slide");

    let isDragging = false;

    slides.forEach((slide) => {
        slide.addEventListener("mousedown", () => (isDragging = false));
        slide.addEventListener("mousemove", () => (isDragging = true));
        slide.addEventListener("mouseup", function () {
            if (isDragging) return; // Prevent click event when dragging

            const video = this.querySelector(".video");
            if (!video) return;

            const isPlaying = !video.paused && !video.ended;

            slides.forEach((s) => {
                const otherVideo = s.querySelector(".video");
                if (otherVideo && otherVideo !== video) {
                    otherVideo.pause();
                    s.classList.remove("playing");
                }
            });

            if (isPlaying) {
                video.pause();
                this.classList.remove("playing");
            } else {
                video.play();
                this.classList.add("playing");
            }
        });
    });
});
