//scale the image

const scaleImg = document.getElementById("scaleImage");
let isScaled = false;

scaleImg.addEventListener("click", function () {
    if (isScaled) {
        scaleImg.style.transform = "scale(1.0)";
    } else {
        scaleImg.style.transform = "scale(0.8)";
    }
    isScaled = !isScaled;
});

//moving the bottom image

var id = null;

function Move() {
     var man = document.getElementById("rocket");   
    var pos = 0;
    clearInterval(id);
    id = setInterval(frame, 1);
    function frame() {
        if (pos == (Number(document.getElementById("rocket-container").clientWidth)-320)) {
            clearInterval(id);
        } else {
            pos++; 
            man.style.left = pos + 'px';
        }
    }
}

function validateForm() {
    var name = document.getElementById("name").value;
    var telephone = document.getElementById("telephone").value;
    var email = document.getElementById("email").value;

    // Validate name (required)
    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    // Validate telephone (required and numeric)
    if (telephone === "") {
        alert("Please enter your telephone number.");
        return false;
    } else if (isNaN(telephone)) {
        alert("Telephone number must be numeric.");
        return false;
    }

    // Validate email (required and valid format)
    if (email === "") {
        alert("Please enter your email address.");
        return false;
    } else if (!isValidEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // All validations passed, the form can be submitted
    return true;
}

function isValidEmail(email) {
    // Regular expression to validate email format
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

window.addEventListener('scroll', () => {
    let scrolledVal = Math.ceil(window.scrollY);
    console.log(scrolledVal);
    const titlePane = document.querySelector('.title-pane');

    if (scrolledVal > 368) {
        titlePane.style.top = '-100%';
    } else {
        titlePane.style.top = '0';
    }
})

const carImage = document.querySelector('.car');
    const carContainer = document.querySelector('.car-container');
    let isMovingRight = false;
    
    carImage.addEventListener('click', () => {
      isMovingRight = !isMovingRight;
      moveCar();
    });
    
    function moveCar() {
      const carWidth = carImage.clientWidth;
      const containerWidth = carContainer.clientWidth;
    
      if (isMovingRight) {
        carImage.style.transform = `translateX(${containerWidth - carWidth}px)`;
      } else {
        carImage.style.transform = 'translateX(0)';
      }
    }