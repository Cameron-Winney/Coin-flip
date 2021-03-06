let coin = {
    state: 0,
    flip: function() {
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
           return this.state = Math.round(Math.random() * 1)


    },
    toString: function() {
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
            if(this.state == 0) {
                return "Heads"
            } else {
                return "Tails"
            }

    },
    toHTML: function() {
        let image = document.createElement('img');
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/

           image.src = this.state === 0 ?
           "img/heads.jpg" : 
           "img/tails.jpg"
           image.style.height ="200px"
           image.style.width = "200px"
        return image;
    }
}
    function flip20times(){
        for(let i = 0; i < 20; i++) {
            let element = document.createElement("p")
            element.style.margin = "10px"
            coin.flip()
            element.append(coin.toString())
            document.body.append(element)
        }
    }
    function display20times() {
        for(let i = 0; i < 20; i++) {
            coin.flip()
            document.body.append(coin.toHTML())
        }
    }
