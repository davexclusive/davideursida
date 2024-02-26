//script.js

function SendMail () {
    var params = {
        from_name: document.getElementById("from_name").value,
        email_id: document.getElementById("email_id").value,
        phone_id: document.getElementById("phone_id").value,
        message: document.getElementById("message").value,
    };
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