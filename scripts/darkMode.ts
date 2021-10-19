class DarkMode {
	private readonly key = "dark";
	private readonly className = "dark";

	private get isDark(): boolean {
		return localStorage.getItem(this.key) === "true";
	}

	private set isDark(state: boolean) {
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

function appendToggle(): void {
	const item = document.createElement("li");
	const btnToggle = document.createElement("button");

	btnToggle.innerText = "toggle theme";
	btnToggle.addEventListener("click", () => darkMode.toggle());

	item.appendChild(btnToggle);
	document.querySelector(".navbar .right").appendChild(item);
}

appendToggle();
darkMode.restore();
