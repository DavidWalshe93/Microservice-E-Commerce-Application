// Created by David Walshe on 18/02/2020

// Utility to convert form to a json string to send to server.
const formToJsonString = (formData) => {
    let jsonObject = {};
    formData.forEach((value, key) => {
        jsonObject[key] = value
    });

    return JSON.stringify(jsonObject);
};


// Parses the form and extracts data to a FormData HTML object.
const parseFormData = (form) => {
    let formData = new FormData();
    let formParams = form.serializeArray();

    // Extract image file names from "type=file" input fields and add it to the formData obj.
    $.each(form.find('input[type="file"]'), function (i, tag) {
        $.each($(tag)[0].files, function (i, file) {
            formData.append(tag.name, file.name);
        });
    });

    // Extract data from standard input fields [text, textfield, checkbox, etc] and add it to the formData obj.
    $.each(formParams, function (i, val) {
        formData.append(val.name, val.value);
    });

    return formData;
};


// Starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        let forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                event.preventDefault();
                event.stopPropagation();
                if (form.checkValidity() === false) {
                    form.classList.add('was-validated');
                } else {
                    form.classList.remove('was-validated');
                    submitToServer();
                    form.reset();
                }

            }, false);
        });
    }, false);
})();