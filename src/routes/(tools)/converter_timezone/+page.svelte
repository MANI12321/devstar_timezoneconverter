
<script>
// @ts-nocheck

    import './script'
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
<style>
    body {
        font-family: Franklin Gothic Medium, sans-serif;
        background-color: #F4F4F4;
        background-size: 1200px;
        height: 100%;
        width: 100%;
        margin: 0;
        padding: 0;
    }

    h3 {
        color: #00313d;
        text-shadow: #006e8a;
    }

    #shape {
        background: #00a9f7c2;
        text-align: center;
        border: 1px solid #9CE7FA;
        border-radius: 10px;
        box-shadow: 2px 2px 10px rgba(0, 112, 139, 0.37);
        padding: 20px;
        height: auto;
        width: auto ;
        margin: 10px;
    }

    .button1 {
        float: left;
        padding: 5px;
        background-color: paleturquoise;
        border-radius: 10px;
        border-color: #fcfeffc2;
        align-content: center;
        width: 35%;
    }

    .button2 {
        float: right;
        padding: 5px;
        background-color: paleturquoise;
        border-radius: 10px;
        border-color: #fcfeffc2;
        align-content: center;
        width: 55%;
    }

    .timezone-box {
        background-color: #73bbfdc2;
        color: rgb(0, 64, 80);
        padding: 10px;
        border-radius: 5px;
        margin: 10px;
    }

    #datetime {
        border-radius: 5px;
        border-color:#ffffff;
    }

    #container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 50px;
    }

    .timezone {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 20px;
    }

    .timezone label {
        margin-right: 10px;
    }

    .deleteBtn {
        margin: auto;
        margin-left: 10px;
        padding: 5px 10px;
        background-color: rgb(255, 124, 100);
        border-radius: 5px;
        color: #ffffff;
        border: none;
        cursor: pointer;
    }

    #result {
        margin-top: 20px;
        font-size: 20px;
    }

    .result-box {
        text-align: center;
        background-color: #73bbfdc2;
        color: rgb(0, 64, 80);
        padding: 10px;
        border-radius: 10px;
        margin: 10px;
    }

    @media only screen and (max-width: 600px) {
        /* Adjust styles for smaller screens */
        .timezone {
            flex-direction: column;
            align-items: flex-start;
        }

        .timezone label {
            margin-bottom: 10px;
        }
    }

</style>

<body background="world.png">
<div id="container">
    <h1 style="color: #00313d;">Timezone Converter</h1>
    <div id="timezones">
        <div class="timezone" id="shape">
            <label for="datetime"><h3>Date and Time:</h3></label>
            <input type="datetime-local" id="datetime" value="">
        </div>
        
    </div>
    <div>
        <div id="addedTimezones"></div>
        <button onclick="addTimezone()" id="addButton" class="button1"><h3>Add Timezone</h3></button>

        <button onclick="convertTimezones()" class="button2"><h3>Convert Timezones</h3></button>
    </div>
    <div id="result"></div>
</div>


</body>
