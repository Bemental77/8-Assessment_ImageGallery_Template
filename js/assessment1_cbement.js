var ImageGallery = {

    init: function() {
        picArray = ["1","2","3","4"];

        // Get reference to large image and store in variable named canvas
        canvas = document.querySelector("#bigPic");

        // Get reference to div#thumbnails and store in variable named
        // thumbsDiv
        var thumbsDiv = document.querySelector("div#thumbnails");

        // Set up nodelist, named thumbs, containing references to all
        // img tags in div#thumbnails
        var thumbs = thumbsDiv.querySelectorAll("img");

        // Add mouseover and mouseout event handlers to each thumbnail
        // image using a for loop. Set them up to call a method of our
        // object called newPic on mouse over and a method called origPic
        // on mouse off.
        for (var i = 0; i < thumbs.length; i++) {
            thumbs[i].onmouseover = ImageGallery.newPic;
            thumbs[i].onmouseout = ImageGallery.origPic;
        }

    },

    newPic: function() {
        // Get the value of the moused over object's id attribute and
        // store it in a variable named imgNumber
        var imgNumber = this.getAttribute("id");

        // Build the path to the image we want to rollover to and store
        // the path string in a variable named imgPath
        var imgPath = 'images/bigPics/' + imgNumber + '.jpg';



        // Rollover the large image to the moused over thumbnail's large
        // image
        canvas.src = imgPath;

        console.log("newPic")


    },

    origPic: function() {
        // Rollover the large image back to its original image
        console.log("origPic")
        canvas.src = 'images/bigPics/initialPic.jpg';

    }

};
window.onload = ImageGallery.init();
