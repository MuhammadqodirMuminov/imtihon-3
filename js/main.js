window.addEventListener("DOMContentLoaded", () => {
	const postCards = document.querySelector(".cards"),
		elForm = document.querySelector("#form"),
		elSearch = document.querySelector("#inputSearch"),
		elSelect = document.querySelector("#inputSelect"),
		deletebtn = document.querySelector("#deleteBtn");

	// rendering posts

	function renderpost(data) {
		postCards.innerHTML = "";

		data.forEach((item) => {
			const name = item.name,
				postId = item.postId,
				email = item.email,
				body = item.body,
				id = item.id;

			const card = document.createElement("div");
			card.classList = "col-12 col-md-6 col-xl-4 mb-4";
			card.innerHTML = `<div
                                class="border rounded-2 shadow-lg p-4 d-flex flex-column gap-3 align-items-start mb-1">
                                <img
                                    class="w-100 rounded"
                                    src="https://picsum.photos/200/130"
                                    alt="random image" />
                                <h1 class="mt-2 text-secondary fs-3 text-start">
                                    ${name}
                                </h1>
                                <p class="text-center text-secondary fs-5 fw-bolder">
                                    User:
                                    <span class="fs-6 text-primary fw-lighter"
                                        >${email}</span
                                    >
                                </p>
                                <p class="text-start text-secondary opacity-75">
                                    ${body}
                                </p>
                                <button id="deleteBtn" data-id="${id}" class="btn btn-primary mx-auto w-100 shadow-sm">
                                    Delete
                                </button>
                             </div>`;

			postCards.appendChild(card);
		});
	}

	// searching
    
    function formEvent() {
        elForm.addEventListener("submit", (evt) => {
            evt.preventDefault();

            const search = elSearch.value.trim(),
                newRegx = new RegExp(search, "gi");

            const filterPost = data.filter((item) => {
                return item.name.match(newRegx);
            });

            if (filterPost.length > 0) {
                renderpost(filterPost);
            } else {
                alert(" Nothing is found ? . Please try again !");
            }
        });
    }
    formEvent();

	// selecting

	function selectRender() {
		const postId = [];
		data.forEach((item) => {
            if (!postId.includes(item.postId)) {
				postId.push(item.postId);
            } 
		});

		postId.forEach((item) => {
			const option = document.createElement("option");
			option.textContent = item;
			option.classList = "w-50";
			elSelect.appendChild(option);
		});

		elSelect.addEventListener("change", (event) => {
			event.preventDefault();

			const filterPostId = data.filter(
				(item) => item.postId == elSelect.value || elSelect.value == 'all'
			);

			renderpost(filterPostId);
		});
	}
	selectRender();

	//  deleting posts

	function detePost() {
		postCards.addEventListener("click", (evt) => {
			const filteredArray = data.filter((data) => {
				if (data.id != evt.target.attributes[1].value) {
					return evt.target;
				}
			});
			data = filteredArray;
			renderpost(filteredArray);
		});
	}
	detePost();

	// post rendered

	renderpost(data);
});
