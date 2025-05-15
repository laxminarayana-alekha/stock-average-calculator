function createShareBlock() {
  const container = document.createElement("div");
  container.className = "mb-3 border-bottom pb-3 share-block";
  container.innerHTML = `
    <h5 class="share-label">Share</h5>
    <div class="row g-2 align-items-center">
      <div class="col-md-6">
        <label class="form-label">Buy Price</label>
        <div class="position-relative currency-input">
          <input type="number" class="form-control" name="price[]" placeholder="0" min="0">
        </div>
      </div>
      <div class="col-md-6">
        <label class="form-label">Quantity</label>
        <div class="position-relative currency-input">
          <input type="number" class="form-control" name="quantity[]" placeholder="0" min="0">
        </div>
      </div>
    </div>
  `;
  return container;
}


function renumberShares() {
  document.querySelectorAll(".share-block").forEach((block, index) => {
    block.querySelector(".share-label").textContent = `Share ${index + 1}`;
  });
}

function bindInputs() {
  document.querySelectorAll("input[name='price[]'], input[name='quantity[]']").forEach(input => {
    input.removeEventListener("input", calculateAverage);
    input.addEventListener("input", calculateAverage);
  });

  document.querySelectorAll(".remove-share").forEach(btn => {
    btn.removeEventListener("click", removeShareBlock);
    btn.addEventListener("click", removeShareBlock);
  });
}

function removeShareBlock(event) {
  const block = event.target.closest(".share-block");
  block.remove();
  renumberShares();
  calculateAverage();
  updateRemoveButtons();
}

function updateRemoveButtons() {
  const blocks = document.querySelectorAll(".share-block");
  blocks.forEach((block, index) => {
    let btn = block.querySelector(".remove-share");

    if (blocks.length > 2) {
      if (!btn) {
        btn = document.createElement("button");
        btn.type = "button";
        btn.className = "btn btn-sm btn-danger mt-2 remove-share";
        btn.textContent = "Remove";
        block.appendChild(btn);
      }
    } else {
      if (btn) {
        btn.remove();
      }
    }
  });

  bindInputs();
}

