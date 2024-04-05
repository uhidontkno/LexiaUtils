function LexiaPopup(text,largeText = "",title = "Oops!",image,returnToLogin = true) {
try {
document.querySelector("#errorPopup").remove() // prevent duplicates
} catch {}
document.querySelector("#appContainer").innerHTML += `<div id="errorPopup" class="error"><div class="error-title"><div class="error-title-label">${title}</div></div><div class="error-body"><div class="error-large-text">${largeText}</div><div class="error-body-text">${text}</div><div class="error-button-container">${returnToLogin ? '<div id="button1" tabindex="1" class="error-button"><div class="error-button-label">Return to login</div></div>' : ""}</div></div><img src="/asset/version/5.1.4/release/5.1.4/20/assets/shell/theme/cards/ui/errors/${image}.png" class="error-image"></div>`
}
// example: LexiaPopup("haiiiiiiiii!!1","haiiii","hai","something_went_wrong",false)
// usage: LexiaPopup("body","large_text","title","error_image",showReturnToLoginButton)
