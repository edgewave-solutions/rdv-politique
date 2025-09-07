<script>
async function loadAds() {
  const response = await fetch("https://ews-ads.vercel.app/file.json");
  return await response.json();
}

function createPopup(ad) {
  const popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.bottom = "20px";
  popup.style.right = "20px";
  popup.style.width = "260px";
  popup.style.padding = "15px";
  popup.style.background = "#fff";
  popup.style.border = "1px solid #ccc";
  popup.style.borderRadius = "12px";
  popup.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";
  popup.style.zIndex = "9999";
  popup.style.fontFamily = "Arial, sans-serif";

  popup.innerHTML = `
    <img src="${ad.image}" alt="${ad.title}" style="width:100%;border-radius:8px;">
    <h3 style="margin:10px 0;font-size:16px;color:#333;">${ad.title}</h3>
    <p style="font-size:14px;color:#555;">${ad.content}</p>
  `;

  // bouton lien
  const linkBtn = document.createElement("a");
  linkBtn.href = ad.buttonLink;
  linkBtn.target = "_blank";
  linkBtn.textContent = ad.buttonText;
  linkBtn.style.display = "inline-block";
  linkBtn.style.marginTop = "8px";
  linkBtn.style.padding = "6px 12px";
  linkBtn.style.background = "#007BFF";
  linkBtn.style.color = "#fff";
  linkBtn.style.borderRadius = "6px";
  linkBtn.style.textDecoration = "none";
  linkBtn.style.fontSize = "13px";

  // bouton fermer manuel
  const closeBtn = document.createElement("button");
  closeBtn.textContent = "✖";
  closeBtn.style.position = "absolute";
  closeBtn.style.top = "8px";
  closeBtn.style.right = "8px";
  closeBtn.style.border = "none";
  closeBtn.style.background = "transparent";
  closeBtn.style.fontSize = "14px";
  closeBtn.style.cursor = "pointer";
  closeBtn.onclick = () => popup.remove();

  popup.appendChild(linkBtn);
  popup.appendChild(closeBtn);
  document.body.appendChild(popup);
}

async function startAds() {
  const ads = await loadAds();

  function showRandomAd() {
    const ad = ads[Math.floor(Math.random() * ads.length)];
    createPopup(ad);
  }

  // première apparition directe
  showRandomAd();

  // puis toutes les 3 minutes
  setInterval(showRandomAd, 180000);
}

window.onload = startAds;
</script>
