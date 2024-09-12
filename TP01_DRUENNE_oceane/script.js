$(document).ready(function () 
{
    $('form').on('submit', function (event) 
    {
        event.preventDefault();

        $('.error-message').remove();
        $('#success-message').remove();

        let password = $('#password').val();
        let confirmPassword = $('#confirmPassword').val();
        let isValid = true;

        if (password.length < 8) 
        {
            $('form').after('<span class="error-message" style="color:red;font-size:24px;display: flex;flex-direction: row;flex-wrap: nowrap;justify-content: center;align-items: center;">Le mot de passe doit contenir au moins 8 caractères.</span>');
            isValid = false;
        }

        if (password !== confirmPassword) 
        {
            $('form').after('<span class="error-message" style="color:red;font-size:24px;display: flex;flex-direction: row;flex-wrap: nowrap;justify-content: center;align-items: center;">Les mots de passe sont différents.</span>');
            isValid = false;
        }

        if (isValid) 
        {
            $('form').after('<p id="success-message" style="color:green;font-size:24px;display: flex;flex-direction: row;flex-wrap: nowrap;justify-content: center;align-items: center;">Le formulaire a été validé avec succès !</p>');
            setTimeout(() => {
                this.submit();
            }, 3000); 
        } 
    });
});
