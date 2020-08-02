<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" type="text/css" href="style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Kalkulator bmi</title>
</head>
<body>
    <h4>Kalkulator BMI</h4>
    <div id="main">
    <form method="POST">
        <p>Waga: <input type="number" id="weight" size ="9" name="weight"> kg</p>
        <p>Wzrost: <input type="number" id="height" name="height"> cm</p>
    <button id="btn" class="btn btn-secondary" name="submit">Oblicz</button>
    <p id="result">   
<?php

if (isset($_POST["submit"]) && isset($_POST["weight"]) && isset($_POST["height"])) 
{
    $weight = htmlentities(trim($_POST["weight"]));
    $height = htmlentities(trim($_POST["height"]));

    if ($weight === "" || $height === ""){
        echo "Dane nie mogą być puste !";
    }

    else if (!is_numeric($weight) || !is_numeric($height)){
        echo "Wpisz liczbę !";
    }

    else if ($weight <=0 || $height <=0){
        echo "Dane nie mogą być mniejsze bądź równe 0 !";
    }
    
    else {
        $height = $height/100;
        $height = $height *$height;
        $wynik = $weight/$height;
        $wynik= round($wynik,2);

        if ($wynik <16){
            echo "Twoje BMI to: ". $wynik."<br>";
            echo "Twoja waga wskazuje na wygłodzenie";
        }
        else if ($wynik >=16 && $wynik <16.99){
            echo "Twoje BMI to: ". $wynik."<br>";
            echo "Twoja waga wskazuje na wychudzenie";
        }
        else if ($wynik >=16.99 && $wynik <18.49){
            echo "Twoje BMI to: ". $wynik."<br>";
            echo "Masz niedowagę";
        }
        else if ($wynik >=18.5 && $wynik <24.99){
            echo "Twoje BMI to: ". $wynik."<br>";
            echo "Masz wagę prawidłową!";
        }
        else if ($wynik >=25 && $wynik <29.99){
            echo "Twoje BMI to: ". $wynik."<br>";
            echo "Masz nadwagę";
        }
        else if ($wynik >=30 && $wynik <34.99){
            echo "Twoje BMI to: ". $wynik."<br>";
            echo "Masz I stopień otyłości !";
        }

        else if ($wynik >=35 && $wynik <39.99){
            echo "Twoje BMI to: ". $wynik."<br>";
            echo "Masz II stopień otyłości !";
        }
        else if ($wynik >=40){
            echo "Twoje BMI to: ". $wynik."<br>";
            echo "Masz skrajną otyłość !";
        }
    }
}
     
?>
    </p>
    </form>
</div>
</body>
</html>