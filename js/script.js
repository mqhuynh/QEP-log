var purposes = [];
window.formAvailable = true;

//Capusules to add purposes or remove when clicked
$(document).ready(function(){

    $('#logForm').on('click', '.capsule label', function(){

        $(this).toggleClass('selected');

        if($(this).hasClass('selected')){
            purposes.push($(this).text());
        } else {
            //Pop pu of services
            var index = purposes.indexOf($(this).text());
            purposes.splice(index,1);
        }

    });


});

// Resets the form
function resetAll(){
    purposes = [];
    document.getElementById("logForm").reset();
    $('label.selected').each(function(){
        $(this).removeClass('selected');
    });
    window.pressedKeys = "";
}

//Submits the form
function submitForm(){

    if(window.formAvailable === false){
        console.log('Request Processing');
        return false;
    }

    window.formAvailable = false;

    var save = {
        'wNumber' : $('#wnumber').val(),
        'name' : $('#name').val(),
        'address' : $('#address').val(),
        'category' : $('#category').val(),
        'role' : $('#role').val(),
        'purposes' : purposes.join(', '),
        'remarks' : $('#remarks').val()
    };

    var request = $.ajax({
        url : 'server/save.php',
        data : save,
        dataType : 'html',
        method : 'post'
    });

    request.success(function(response){
        if(response === 'done'){
            alert('Successfully Saved.');
            resetAll();
        } else {
            alert('Failed to Save Data');
            console.log(response);
        }

        window.formAvailable = true;

    });

    request.fail(function(response){
        alert('Failed to Save Data ' + response.statusText);
        console.log(response);
        window.formAvailable = true;
    });




}