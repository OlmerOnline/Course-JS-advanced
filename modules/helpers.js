export function replaceSymbol(text) {
    return text.replaceAll('<', '&#706;').replaceAll('>', '&#707;');
}

export function removeClassError(input) {
    input.classList.remove('input-error');
}
