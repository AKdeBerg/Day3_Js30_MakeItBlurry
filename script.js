//changeTheImage method
const changeTheImage = function () {
    //get the unit
    const unit = this.dataset.sizing || ``;

    //create property and set value accordingly
    document.documentElement.style.setProperty(`--${this.name}`, this.value + unit);

    /********PERSONAL EXPERIMENT*********/
    //console.log(`--${this.name}`) //this is correct
    //console.log(typeof `--${this.name}`) //string
    //console.log(typeof this.value) //string
    // console.log(--this.name) //this is wrong
    // console.log(--`${this.name}`) //this is wrong
    /*************************************/
}

//select all the inputs
const inputs = document.querySelectorAll('input');

//addEventlistener to each of the input to detect change
inputs.forEach((input) => input.addEventListener('change', changeTheImage));
inputs.forEach((input) => input.addEventListener('mousemove', changeTheImage));