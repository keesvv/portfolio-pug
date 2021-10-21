class DarkMode {
	private readonly key = "dark";
	private readonly className = "dark";

	get isDark(): boolean {
		return localStorage.getItem(this.key) === "true";
	}

	set isDark(state: boolean) {
		localStorage.setItem(this.key, String(state));
		this.toggleClass(state);
	}

	private toggleClass(state: boolean): void {
		const { classList } = document.body;

		if (state) {
			classList.add(this.className);
		} else {
			classList.remove(this.className);
		}
	}

	toggle() {
		this.isDark = !this.isDark;
	}

	restore() {
		this.toggleClass(this.isDark);
	}
}

const darkMode = new DarkMode();

function getImg(state: boolean): string {
	return state ? "/static/assets/sun.svg" : "/static/assets/moon.svg";
}

// Sorry I wasn't in the mood to write this in a
// more polished way, feel free to improve it :)
function appendToggle(): void {
	const item = document.createElement("li");
	const btnToggle = document.createElement("button");
	const imgToggle = document.createElement("img");

	imgToggle.src = getImg(darkMode.isDark);

	btnToggle.classList.add("btnToggleTheme");
	btnToggle.addEventListener("click", () => {
		darkMode.toggle();
		imgToggle.src = getImg(darkMode.isDark);
	});

	btnToggle.appendChild(imgToggle);
	item.appendChild(btnToggle);
	document.querySelector(".navbar ul").appendChild(item);
}

appendToggle();
darkMode.restore();
