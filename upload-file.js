

    function uploadProfileImage() {
        var file = document.getElementById('image').files[0];
        var formData = new FormData();
        formData.append('image', file);
        $.ajax({
            url: 'upload-profile-image',
            type: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (result) {
                $("#avatar").val(result.file);
                $("#img-avatar").attr("src",result.file);
            },
            error: function (data) {
                console.log(data);
            }

        });
    }
