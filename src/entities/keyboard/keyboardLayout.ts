interface Key {
	keyName: string
	verticalRow: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
	specific?: string
}
type enKeyboardInterface = {
	row1: Array<Key>
	row2: Array<Key>
	row3: Array<Key>
	row4: Array<Key>
	row5: Array<Key>
}
type keyboardType = "default" | "apple"
type languageType = "en" | "ru"
export const getKeyboardLayout = (
	keyboard: keyboardType,
	language: languageType
) => {
	let enKeyboard: enKeyboardInterface
	if (language === "en") {
		enKeyboard = {
			row1: [
				{ keyName: "`", verticalRow: 0 },
				{ keyName: "1", verticalRow: 1 },
				{ keyName: "2", verticalRow: 2 },
				{ keyName: "3", verticalRow: 3 },
				{ keyName: "4", verticalRow: 4 },
				{ keyName: "5", verticalRow: 5 },
				{ keyName: "6", verticalRow: 6 },
				{ keyName: "7", verticalRow: 7 },
				{ keyName: "8", verticalRow: 8 },
				{ keyName: "9", verticalRow: 9 },
				{ keyName: "0", verticalRow: 10 },
				{ keyName: "-", verticalRow: 10 },
				{ keyName: "+", verticalRow: 10 },
				{
					keyName: keyboard === "default" ? "backspace" : "delete",
					verticalRow: 0,
					specific: "backspace",
				},
			],
			row2: [
				{ keyName: "TAB", verticalRow: 0, specific: "tab" },
				{ keyName: "q", verticalRow: 1 },
				{ keyName: "w", verticalRow: 2 },
				{ keyName: "e", verticalRow: 3 },
				{ keyName: "r", verticalRow: 4 },
				{ keyName: "t", verticalRow: 5 },
				{ keyName: "y", verticalRow: 6 },
				{ keyName: "u", verticalRow: 7 },
				{ keyName: "i", verticalRow: 8 },
				{ keyName: "o", verticalRow: 9 },
				{ keyName: "p", verticalRow: 10 },
				{ keyName: "[", verticalRow: 10 },
				{ keyName: "]", verticalRow: 10 },
				{ keyName: "\\", verticalRow: 0, specific: "slash" },
			],
			row3: [
				{ keyName: "capslock", verticalRow: 0, specific: "capslock" },
				{ keyName: "a", verticalRow: 1 },
				{ keyName: "s", verticalRow: 2 },
				{ keyName: "d", verticalRow: 3 },
				{ keyName: "f", verticalRow: 4 },
				{ keyName: "g", verticalRow: 5 },
				{ keyName: "h", verticalRow: 6 },
				{ keyName: "j", verticalRow: 7 },
				{ keyName: "k", verticalRow: 8 },
				{ keyName: "l", verticalRow: 9 },
				{ keyName: ";", verticalRow: 10 },
				{ keyName: "'", verticalRow: 10 },
				{
					keyName: keyboard === "default" ? "enter" : "return",
					verticalRow: 0,
					specific: "enter",
				},
			],
			row4: [
				{ keyName: "shift", verticalRow: 0, specific: "shift" },
				{ keyName: "z", verticalRow: 1 },
				{ keyName: "x", verticalRow: 2 },
				{ keyName: "c", verticalRow: 3 },
				{ keyName: "v", verticalRow: 4 },
				{ keyName: "b", verticalRow: 5 },
				{ keyName: "n", verticalRow: 6 },
				{ keyName: "m", verticalRow: 7 },
				{ keyName: ",", verticalRow: 8 },
				{ keyName: ".", verticalRow: 9 },
				{ keyName: "/", verticalRow: 10 },
				{ keyName: "shift", verticalRow: 0, specific: "shift" },
			],
			row5: [{ keyName: " ", verticalRow: 0, specific: "space" }],
		}
		return enKeyboard
	} else {
		enKeyboard = {
			row1: [
				{ keyName: "ё", verticalRow: 0 },
				{ keyName: "1", verticalRow: 1 },
				{ keyName: "2", verticalRow: 2 },
				{ keyName: "3", verticalRow: 3 },
				{ keyName: "4", verticalRow: 4 },
				{ keyName: "5", verticalRow: 5 },
				{ keyName: "6", verticalRow: 6 },
				{ keyName: "7", verticalRow: 7 },
				{ keyName: "8", verticalRow: 8 },
				{ keyName: "9", verticalRow: 9 },
				{ keyName: "0", verticalRow: 10 },
				{ keyName: "-", verticalRow: 10 },
				{ keyName: "+", verticalRow: 10 },
				{
					keyName: keyboard === "default" ? "backspace" : "delete",
					verticalRow: 0,
					specific: "backspace",
				},
			],
			row2: [
				{ keyName: "TAB", verticalRow: 0, specific: "tab" },
				{ keyName: "й", verticalRow: 1 },
				{ keyName: "ц", verticalRow: 2 },
				{ keyName: "у", verticalRow: 3 },
				{ keyName: "к", verticalRow: 4 },
				{ keyName: "е", verticalRow: 5 },
				{ keyName: "н", verticalRow: 6 },
				{ keyName: "г", verticalRow: 7 },
				{ keyName: "ш", verticalRow: 8 },
				{ keyName: "щ", verticalRow: 9 },
				{ keyName: "з", verticalRow: 10 },
				{ keyName: "х", verticalRow: 10 },
				{ keyName: "ъ", verticalRow: 10 },
				{ keyName: "\\", verticalRow: 0, specific: "slash" },
			],
			row3: [
				{ keyName: "capslock", verticalRow: 0, specific: "capslock" },
				{ keyName: "ф", verticalRow: 1 },
				{ keyName: "ы", verticalRow: 2 },
				{ keyName: "в", verticalRow: 3 },
				{ keyName: "а", verticalRow: 4 },
				{ keyName: "п", verticalRow: 5 },
				{ keyName: "р", verticalRow: 6 },
				{ keyName: "о", verticalRow: 7 },
				{ keyName: "л", verticalRow: 8 },
				{ keyName: "д", verticalRow: 9 },
				{ keyName: "ж", verticalRow: 10 },
				{ keyName: "э", verticalRow: 10 },
				{
					keyName: keyboard === "default" ? "enter" : "return",
					verticalRow: 0,
					specific: "enter",
				},
			],
			row4: [
				{ keyName: "shift", verticalRow: 0, specific: "shift" },
				{ keyName: "я", verticalRow: 1 },
				{ keyName: "ч", verticalRow: 2 },
				{ keyName: "с", verticalRow: 3 },
				{ keyName: "м", verticalRow: 4 },
				{ keyName: "и", verticalRow: 5 },
				{ keyName: "т", verticalRow: 6 },
				{ keyName: "ь", verticalRow: 7 },
				{ keyName: "б", verticalRow: 8 },
				{ keyName: "ю", verticalRow: 9 },
				{ keyName: ".", verticalRow: 10 },
				{ keyName: "shift", verticalRow: 0, specific: "shift" },
			],
			row5: [{ keyName: " ", verticalRow: 0, specific: "space" }],
		}
		return enKeyboard
	}
}
