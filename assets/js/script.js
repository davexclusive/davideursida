//script.js

type="text/javascript">
        (function () {
            emailjs.init({
                publicKey: "-hjr_Xs3tNPqnQ-b0",
            });
        })();


function SendMail () {
    var params = {
        from_name: document.getElementById("from_name").value,
        email_id: document.getElementById("email_id").value,
        phone_id: document.getElementById("phone_id").value,
        message: document.getElementById("message").value,
        
    };

    if (!params.from_name || !params.email_id || !params.message) {
        alert("Please fill in all required fields."); 
        return;
      }


     const serviceID = "service_nhulve7";
     const templateID = "template_i8p6wzn";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("from_name").value = "";
        document.getElementById("email_id").value = "";
        document.getElementById("phone_id").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));
}