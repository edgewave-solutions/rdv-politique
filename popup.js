// popup.js
document.addEventListener("DOMContentLoaded", () => {
  // Créer le conteneur du popup
  const popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.background = "#fff";
  popup.style.border = "2px solid #333";
  popup.style.borderRadius = "12px";
  popup.style.padding = "20px";
  popup.style.boxShadow = "0 0 15px rgba(0,0,0,0.3)";
  popup.style.zIndex = "9999";
  // popup.js
document.addEventListener("DOMContentLoaded", () => {
  // Créer un conteneur générique (pas de "ad"/"pub" dans les ids/classes)
  const box = document.createElement("div");
  box.style.position = "fixed";
  box.style.top = "50%";
  box.style.left = "50%";
  box.style.transform = "translate(-50%, -50%)";
  box.style.background = "#fff";
  box.style.border = "2px solid #333";
  box.style.borderRadius = "12px";
  box.style.padding = "20px";
  box.style.boxShadow = "0 0 15px rgba(0,0,0,0.3)";
  box.style.zIndex = "99999";
  box.style.textAlign = "center";
  box.style.fontFamily = "Arial, sans-serif";

  // Contenu
  box.innerHTML = `
    <h2 style="margin-bottom:10px; color:#4CAF50;">🔥 Vibes Hosting 🔥</h2>
    <p style="margin-bottom:15px;">Hébergement rapide, fiable et abordable.</p>
    <a href="https://vibes-hosting.fr" target="_blank" 
       style="display:inline-block; background:#4CAF50; color:#fff; padding:10px 20px; 
              border-radius:8px; text-decoration:none; font-weight:bold;">
      Découvrir
    </a>
    <br><br>
    <button id="closeBox" 
            style="margin-top:10px; background:#f44336; color:#fff; border:none; 
                   padding:8px 15px; border-radius:8px; cursor:pointer;">
      Fermer
    </button>
  `;

  document.body.appendChild(box);

  // Bouton fermer
  document.getElementById("closeBox").addEventListener("click", () => {
    box.remove();
  });
});
