window.onload = () => {
    getBooks();
  };
  const getBooks = () => {
    fetch("https://striveschool-api.herokuapp.com/books")
      .then(resp => resp.json()).then(data=>console.log(data))
      .then((body) => {
        
        console.log(body);
        const row = document.querySelector(".album .row");
  
        row.innerHTML = "";
  
        for (const book in body.books)
          const col = document.createElement("div");
          col.className = "col-md-4";
  
          col.innerHTML = <div class="card mb-4 shadow-sm">
                <img src="${book.img}" class="img-card">
                <div class="card-body">
                    <p class="card-text">
                        <title>${book.title}</title>
                    </p>
                    <div
                    class="d-flex justify-content-between align-items-center"
                    >
                        <div class="btn-group">
                            <button
                            type="button"
                            class="btn btn-sm btn-outline-secondary"
                            onclick="showModal(event)"
                            data-bs-toggle="modal" data-bs-target="#exampleModal"
                            >
                            View
                            </button>
                                <button
                                type="button"
                                class="btn btn-sm btn-outline-secondary"
                                >
                                Edit
                            </button>
                        </div>
                        <small class="text-muted">${book.category}</small>
                    </div>
                </div>
            </div>
  
          row.appendChild(col);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };