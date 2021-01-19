function Receipe (title, steps) {
  let receipe = Object.create(Receipe.prototype)
  receipe.title = title
  receipe.steps = steps

  return receipe
}

Receipe.prototype.cook = function () {
    
    let array = this.steps;
    let newArray = [];
    newArray.push("<h2>")
    newArray.push(`Let's get into the ${this.title} receipe`);
    newArray.push("</h2>")
    newArray.push("<br />")

    array.forEach((i) => {
    	if (i.length > 3) {
    		if (i[3] === "dry") {
    			newArray.push(`Add ${convert(i[0])} ${i[1]} of ${i[2]} to the bowl.`)
    		}
  			else if (i[3] === "wet") {
  				newArray.push(`For ${convert(i[0])} ${i[1]} of ${i[2]} to the bowl`)
  			}
  		}
  		else if (i.length === 2 && typeof(i[0]) === "number" && typeof(i[0]) === "number"){
  			if (i[0] > 0 && i[1] > 0 ) {
  				newArray.push( `Then, heat ${i[1]} minutes in the oven at ${i[0]} degrees.`)
  			}
  		}
  		else{
  			newArray.push(i[0])
  		}
    })
    return newArray.join("<br />")
}


convert = (n) => {
	if (n == 0.5) {
		n = "1/2"
		return n
	}
	else if (n == 0.25) {
			n = "1/4"
			return n
	}
	else if (n == 0.75) {
			n = "3/4"
			return n
	}
};


const steps = [
  [1, "cup", "white flour", "dry"],
  [0.5, "tsp", "baking soda", "wet"],
  [0.25, "tsp", "salt", "dry"],
  [0.25, "cup", "sugar", "dry"],
  [0.25, "cup", "brow sugar", "dry"],
  [0.25, "tbsp", "soy milk", "wet"],
  [0.25, "tbsp", "oil", "wet"],
  [0.25, "tsp", "pure vanilla extract", "dry"],
  ["Form into one big ball, then either refrigerate at least 2 hours or freeze until the dough is cold. Once dough is chilled, preheat oven to 325 F. Form dough balls, and place on a greased baking tray, leaving enough room between cookies for them to spread."],
  [325, 10]
]

showReceipe = () => {
	const Cookies = Receipe("Cookies", steps)
	let paragraph = document.getElementById("show")
	paragraph.innerHTML = Cookies.cook()
};

document.getElementById("button").addEventListener("click", showReceipe);