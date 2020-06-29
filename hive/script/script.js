function flowerify(){
	const flowersNo = 14;

	let flowerTemplate = $($("#flower").html().trim());
	let body = $("body");

	for (var i = 1; i < 60; i++) {
		let f = flowerTemplate.clone();
		f.attr("src", `img\\flower (${Math.floor(Math.random() * flowersNo) + 1}).png`);
		f.css("top", `${Math.floor(Math.random() * 150) -50 }vh`)
		f.css("left", `${Math.floor(Math.random() * 150) -50 }vw`)
		f.css("animation-delay", `${Math.floor(Math.random() * 3000) + 1}ms`)
		body.append(f);
	}
}

$(document).ready( function() {
	console.log("ready!");
	flowerify();
})