(function () {
  const select = document.getElementById("category");
  const result = document.getElementById("result");
  const itemsEl = document.getElementById("items");
  const titleEl = document.getElementById("categoryTitle");

  function render(category, data) {
    if (!category || !data[category]) {
      result.classList.remove("show");
      setTimeout(() => result.classList.add("hidden"), 300);
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
    setTimeout(() => result.classList.add("show"), 10);
  }

  fetch("prijem_reklamaci.json", { cache: "no-store" })
    .then((r) => r.json())
    .then((data) => {
      Object.keys(data)
        .sort((a, b) => a.localeCompare(b, "cs"))
        .forEach((c) => {
          const opt = document.createElement("option");
          opt.value = c;
          opt.textContent = c;
          select.appendChild(opt);
        });

      const hash = decodeURIComponent(location.hash.replace(/^#/, ""));
      if (hash && data[hash]) {
        select.value = hash;
        render(hash, data);
      }

      select.addEventListener("change", () => {
        const cat = select.value;
        if (cat) location.hash = encodeURIComponent(cat);
        else history.replaceState(null, "", location.pathname);
        render(cat, data);
      });
    });
})();