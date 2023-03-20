formData.onsubmit = async (e) => {
    if(document.getElementById("custom-button-upload").files.length > 0)
    {
        e.preventDefault();

        let response = await fetch('/', {
            method: 'post',
            body: new FormData(formData)
        });

        let result = await response.json();

        if(!alert(result.result))
        {
            document.getElementById("custom-button-upload").value = ''
        }
    }
    else
    {
        alert("No files selected");
    }
}