(function () {
  const select = document.getElementById("category");
  const result = document.getElementById("result");
  const itemsEl = document.getElementById("items");
  const titleEl = document.getElementById("categoryTitle");

  // Helper: render items
  function render(category, data) {
    if (!category || !data[category]) {
      result.classList.add("hidden");
      itemsEl.innerHTML = "";
      titleEl.textContent = "";
      return;
    }
    titleEl.textContent = category;
    itemsEl.innerHTML = "";
    data[category].forEach((val) => {
      const li = document.createElement("li");
      li.textContent = val;
      itemsEl.appendChild(li);
    });
    result.classList.remove("hidden");
  }

  // Load JSON and populate select
  fetch("prijem_reklamaci.json", { cache: "no-store" })
    .then((r) => r.json())
    .then((data) => {
      // Fill dropdown
      const cats = Object.keys(data);
      cats.sort((a, b) => a.localeCompare(b, "cs"));
      cats.forEach((c) => {
        const opt = document.createElement("option");
        opt.value = c;
        opt.textContent = c;
        select.appendChild(opt);
      });

      // If there's a hash in the URL, preselect
      const hash = decodeURIComponent(location.hash.replace(/^#/, ""));
      if (hash && data[hash]) {
        select.value = hash;
        render(hash, data);
      }

      // On change
      select.addEventListener("change", () => {
        const cat = select.value;
        // Keep selection in URL for easy sharing
        if (cat) {
          location.hash = encodeURIComponent(cat);
        } else {
          history.replaceState(null, "", location.pathname);
        }
        render(cat, data);
      });
    })
    .catch((err) => {
      console.error("Nepodařilo se načíst JSON:", err);
      alert("Nepodařilo se načíst data. Zkontroluj, že je soubor 'prijem_reklamaci.json' ve stejné složce.");
    });
})();