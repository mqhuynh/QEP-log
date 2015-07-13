window.pressedKeys = '';
window.shift = false;

$(document).on('keyup', function(e){
    if(e.keyCode === 16){ //Shift
        window.shift = true;
        return false;
    } else {
        if(window.shift){
            window.pressedKeys +=  shifter(e.key);
        } else {
            window.pressedKeys += e.key;
        }
        window.shift = false;
    }


    //match Student ID Card
    var _std = window.pressedKeys.match(";601509[0-9]{9}0");

    if(_std !== null){
        var WId = getWID(_std.join(''));
        $('#wnumber').val(WId);

        console.log(WId.length);
        window.pressedKeys = "";
    }

    //match Driver's License Card

    var _drive_validation = /([\%])([A-Z]{2})([A-Z]{1,40})([\^])([A-Z]{1,40})([\$])([A-Z ]{1,40})([\^])([A-Z0-9 -]{0,100})/;
    var _drive = window.pressedKeys.match(_drive_validation);

    if(_drive !== null){
        var driver = getDriverInfo(_drive.join(''));
        $('#name').val(driver.name);
        $('#address').val(driver.address);

    }



    //;6015090005731790?

    return false;
});

function getDriverInfo(str){

    /*
     Sample of String:
     %LAHAMMOND
     ^DAVID$RAHUL R
     ^11246 LEFT DELUXE ST$
     ^?;336007118648079=191215670903=?#20722135690  E 01
     1505145                                           ?

     */

    var info = {
        name : '',
        address : ''
    };


    if(str.charAt(0) === '%'){

        var arr = str.split('^');


        var state = arr[0].substr(1,2);
        var city = arr[0].substr(3,arr[0].length - 3);

        var name = arr[1].replace('$',', ');

        var address = arr[4].replace('$',''); //Must be two BUT!!!

        info.name = name;
        info.address = address + ", " + city + " " + state;


    }


    return info;

}

function getWID(string){
    //Sample of String: ;6015090005731790

    if(string.charAt(0) === ';'){

        if(string.length === 17){

            if(string.substr(7,3) === "000"){
                //W ID
                return string.substr(9,7);

            } else {
                //SSN
                return  "XXX-XX-" + string.substr(12,4);
            }

        }

    }

    return "";

}

function shifter(data){

    if(isNaN(parseInt(data))){

        if(data){

            return data.toUpperCase();
        } else {
            return '';
        }

    }

    data = parseInt(data);

    switch (data){
        case 0 :
            return ')';
        case 1:
            return '!';
        case 2:
            return '@';
        case 3:
            return "#";
        case 4:
            return "$";
        case 5:
            return "%";
        case 6:
            return "^";
        case 7:
            return "&";
        case 8:
            return "*";
        case 9:
            return "(";
        default :
            return data.toUpperCase();



    }
}