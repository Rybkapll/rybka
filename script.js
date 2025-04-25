document.getElementById("rybka").addEventListener("click", () => {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank", "width=400,height=400");
    }, i * 300);
  }
});
