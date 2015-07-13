<!DOCTYPE HTML>
<html>
    <head>

        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">

        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>

        <link rel="stylesheet" href="css/style.css">
        <script src="js/reader.js"></script>
        <script src="js/script.js"></script>

    </head>


    <body>

        <div class="container">
            <h3>Visitor's Log</h3>

            <form id="logForm" onsubmit="return false;">

                <div class="form-group">
                    <label for="wnumber">W Number</label>
                    <input id="wnumber" type="text" class="form-control" />
                </div>

                <div class="form-group">
                    <label for="name">Name</label>
                    <input id="name" type="text" class="form-control" />
                </div>

                <div class="form-group">
                    <label for="address">Address</label>
                    <input id="address" type="text" class="form-control" />
                </div>


                <div class="form-group">
                    <label for="category">Category</label>
                    <select id="category" class="form-control">

                        <option value="" selected>Please Select</option>
                        <optgroup label="Students">
                            <option>Freshman</option>
                            <option>Sophomore</option>
                            <option>Junior</option>
                            <option>Senior</option>
                            <option>Graduate</option>
                            <option>Alumni</option>
                        </optgroup>

                        <optgroup label="SLU HRTL">
                            <option>Faculty</option>
                            <option>Administrator</option>
                            <option>Staff</option>
                        </optgroup>

                        <optgroup label="Non-SLU">
                            <option>Local Partner</option>
                            <option>Local Community</option>
                            <option>Other</option>
                        </optgroup>

                        </select>
                </div>

                <div class="form-group">
                    <label for="role">Role</label>
                    <select id="role" class="form-control">
                        <option value="" selected>Please Select</option>
                        <option>Student</option>
                        <option>Student Ambassador</option>
                        <option>Faculty</option>
                        <option>EL Team</option>
                        <option>RWR Advisory Council - Faculty</option>
                        <option>RWR Advisory Council - Staff</option>
                        <option>RWR Advisory Council - Community Partner</option>
                        <option>Campus Administrator</option>
                        <option>Other</option>

                    </select>
                </div>

                <hr />
                <h5>Purpose of the visit</h5>


                <?php

                //Making capsules

                    $array = json_decode(file_get_contents('js/purposes.json'));
                    if($array){
                        foreach($array as $purpose){
                            echo '  <div class="form-group capsule">
                                    <label for="'.$purpose.'">'.$purpose.'</label>
                                    <input id="'.$purpose.'" type="checkbox" class="form-control" />
                                </div>';
                        }
                    }

                ?>

                <hr />

                <div class="form-group">
                    <label for="remarks">Remarks</label>
                    <input id="remarks" type="text" class="form-control" />
                </div>

                <div class='form-group'>
                    <a onclick="submitForm()" class="btn btn-primary">Save</a>
                    <a onclick="resetAll()"  class="btn btn-danger">Reset</a>
                </div>

            </form>


        </div>

    </body>

</html>