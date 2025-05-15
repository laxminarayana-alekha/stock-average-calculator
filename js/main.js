document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("shares-container");
  const addBtn = document.getElementById("add-more");

  // Add initial two shares
  for (let i = 0; i < 2; i++) {
    const block = createShareBlock();
    container.appendChild(block);
  }

  renumberShares();
  bindInputs();
  updateRemoveButtons();

  addBtn.addEventListener("click", () => {
    const newBlock = createShareBlock();
    container.appendChild(newBlock);
    renumberShares();
    bindInputs();
    updateRemoveButtons();
  });
});
