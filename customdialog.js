export function implementButtons() {
    ///alert(`Hello, ${user}!`);

    const a_dialog = document.getElementById('alert_dialog');
    const c_dialog = document.getElementById('confirm_dialog');
    const p_dialog = document.getElementById('prompt_dialog');


    const alertbutton = document.getElementById("alert_b");
    const confirmbutton = document.getElementById("confirm_b");
    const promptbutton = document.getElementById("prompt_b");
    const spromptbutton = document.getElementById("sprompt_b");
    const output = document.getElementById("output");

    alertbutton.addEventListener("click", (event) => {
        //alert('Today is: ' + new Date());
        a_dialog.showModal();
    });

    confirmbutton.addEventListener("click", (event) => {
        //alert('Today is: ' + new Date());
        const cancelbutton = document.getElementById("cancel");
        const okbutton = document.getElementById("ok");

        c_dialog.showModal();


        okbutton.addEventListener("click", (event) => {
            output.textContent = "Confirmed result: TRUE";
            
        });

        cancelbutton.addEventListener("click", (event) => {
            output.textContent = "Confirmed result: FALSE";
            
        });

    });

    promptbutton.addEventListener("click", (event) => {
        //alert('Today is: ' + new Date());
        //p_dialog.showModal();

        p_dialog.showModal();


        let inputtext = document.getElementById("text");
        const okbutton = document.getElementById("p_ok");
        const cancelbutton = document.getElementById("p_cancel");
        

        okbutton.addEventListener("click", (event) => {
            output.textContent = "You entered: " + inputtext.value;
        });

        cancelbutton.addEventListener("click", (event) => {
            output.textContent = "You did not enter anything";
        });

        inputtext.value = "";
    });


    confirmbutton.addEventListener("mousedown", async () => {
        output.textContent = "";
    });

    promptbutton.addEventListener("mousedown", async () => {
        output.textContent = "";
    });

    alertbutton.addEventListener("mousedown", async () => {
        output.textContent = "";
    });

}