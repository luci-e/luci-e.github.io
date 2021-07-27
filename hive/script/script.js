function flowerify(){
	const flowersNo = 14;

	let flowerTemplate = $($("#flower").html().trim());
	let body = $("body");

	for (var i = 1; i < 60; i++) {
		let f = flowerTemplate.clone();
		f.attr("src", `img\\flower (${Math.floor(Math.random() * flowersNo) + 1}).png`);
		f.css("top", `${Math.floor(Math.random() * 150) -50 }vh`)
		f.css("left", `${Math.floor(Math.random() * 150) -50 }vw`)
		f.css("animation-delay", `-${Math.floor(Math.random() * 3000) + 1}ms`)
		body.append(f);
	}
}

var decrypted = false;
var enc = null;

function handleSubmit(event){
	event.preventDefault();
	console.log( $("#passcode").val());

	if (!decrypted){
		let dec = CryptoJS.AES.decrypt(enc, $("#passcode").val() ).toString(CryptoJS.enc.Utf8);

		if(dec.startsWith("text")){
			decrypted = true;
			$("#bee_says").html("Thanks, here are the coordinates:")
		}else{
			$("#bee_says").html("Bzz Bzz that was wrong")
		}
	}

	return false;
}

$(document).ready( function() {
	console.log("ready!");
	flowerify();

	$("#submit_button").on("click", handleSubmit);

	enc = CryptoJS.AES.encrypt("text", "password").toString();
	console.log(enc);
})