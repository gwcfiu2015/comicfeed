function iframeChange() 
    {
        var buttons = document.querySelector(".loadiframe"),
            iframe = document.getElementById('frame');
        buttons.addEventListener("click", function (e) {
            iframe.src = e.target.dataset.src;
            iframe.width = e.target.dataset.width;
            iframe.height = e.target.dataset.height;
        });
    }
    window.onload = iframeChange;

    $(document).ready(function()
    {
        $("#hideframe").hide();
    });   
