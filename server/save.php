<?php
    try{

        define('FILE', 'log.txt');
        $content = file_get_contents(FILE);

            if(trim($content) === ''){
                $content .=        "DateTime";
                $content .= "\t" . "W#";
                $content .= "\t" . "Name";
                $content .= "\t" . "Address";
                $content .= "\t" . "Category";
                $content .= "\t" . "Role";
                $content .= "\t" . "Purpose(s)";
                $content .= "\t" . "Remarks";
            }


            $now = new DateTime();
            $content .= "\n" . $now->format('Y-m-d h:i A');
            $content .= "\t" . $_POST['wNumber'];
            $content .= "\t" . $_POST['name'];
            $content .= "\t" . $_POST['address'];
            $content .= "\t" . $_POST['category'];
            $content .= "\t" . $_POST['role'];
            $content .= "\t" . $_POST['purposes'];
            $content .= "\t" . $_POST['remarks'];



            if(file_put_contents(FILE, $content) >= 0){
                echo 'done';
            } else {
                die('Failed to save');
            }




    } catch (Exception $e){
        die('Bad File Permission');
    }