<script>
    let timezoneCount = 0;
    let currentDateTime = new Date().toLocaleString('sv');
    currentDateTime = currentDateTime.substring(0, currentDateTime.length - 3);
    /**
	 * @type {any[]}
	 */
    let selectedTimezones = [];
    /**
	 * @type {string | any[]}
	 */
    let convertedTimes = [];
  
    function addTimezone() {
      if (timezoneCount < 5) {
        selectedTimezones = [...selectedTimezones, ''];
        timezoneCount++;
      }
    }
  
    let sortedTimezones = [
    "UTC",
    "America/New_York",
    "Europe/London",
    "Asia/Tokyo",
    "Australia/Sydney",
    "America/Los_Angeles",
    "Asia/Dubai",
    "Europe/Paris",
    "Africa/Cairo",
    "Asia/Singapore",
    // Add more timezones here
  ].sort();
  
    /**
	 * @param {number} index
	 */
    function deleteTimezone(index) {
      selectedTimezones.splice(index, 1);
      timezoneCount--;
      selectedTimezones = [...selectedTimezones]; // trigger Svelte reactivity
    }
  
    function convertTimezones() {
      const datetime = new Date(currentDateTime);
      /**
		 * @type {any[]}
		 */
      const resultText = [];
  
      selectedTimezones.forEach((timezone) => {
        if (timezone) {
          const convertedDate = new Date(
            datetime.toLocaleString('en-US', { timeZone: timezone })
          );
          resultText.push({
            timezone,
            convertedDate: convertedDate.toLocaleString(),
          });
        }
      });
  
      convertedTimes = resultText;
    }
  </script>
  <style>
    body {
    font-family: Franklin Gothic Medium, sans-serif;
    background-color: transparent;
    background-image: url('world.png');
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    position: absolute;
    background-position: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 0;
  }
  
    #title {
      text-align: center;
    }
  
    h3 {
      color: #00313D;
    }
  
    #shape {
      align-self: center;
      background: #00a9f7c2;
      text-align: center;
      border: 1px solid #9CE7FA;
      border-radius: 10px;
      box-shadow: 2px 2px 10px rgba(0, 112, 139, 0.37);
      padding: 20px;
      width: 100%;
      max-width: 400px;
      margin: 10px;
    }
  
    .button1 {
      align-self: center;
      padding: 10px;
      background-color: paleturquoise;
      border-radius: 10px;
      border: 1px solid #fcfeffc2;
      width: 40%;
      max-width: 400px;
      margin-bottom: 10%;
      float: left;
    }
  
  
    .button2 {
      align-self: center;
      padding: 10px;
      background-color: paleturquoise;
      border-radius: 10px;
      border: 1px solid #fcfeffc2;
      width: 55%;
      max-width: 400px;
      margin-bottom: 10%;
      float: right;
    }
  
    .timezone-box {
      background-color: #73bbfdc2;
      color: rgb(0, 64, 80);
      padding: 10px;
      border-radius: 5px;
      margin: 10px;
      width: auto;
      max-width: 400px;
      align-self: center;
    }
  
    #datetime {
      border-radius: 5px;
      border-color: #FFFFFF;
      width: 100%;
      max-width: 400px;
      margin: 10px;
    }
  
    #container {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin-top: 50px;
    }
  
    .timezone {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      margin-bottom: 20px;
      width: 100%;
      max-width: 400px;
    }
  
    .timezone label {
      margin-right: 10px;
    }
  
    .deleteBtn {
      padding: 10px;
      background-color: rgb(255, 124, 100);
      border-radius: 5px;
      color: #FFFFFF;
      border: none;
      cursor: pointer;
    }
  
    #result {
      margin-top: 20px;
      font-size: 20px;
      width: 100%;
      max-width: 400px;
    }
  
    .result-box {
      text-align: center;
      background-color: #73bbfdc2;
      color: rgb(0, 64, 80);
      padding: 10px;
      border-radius: 10px;
      margin: 10px;
      width: 100%;
      max-width: 400px;
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
  
    #timezones {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      padding: 0%;
    }
  
    #datetime {
      flex: 1;
      border-radius: 5px;
      border-color: #FFFFFF;
      max-width: calc(100% - 100px);
      margin: 10px 5px;
    }
  
  </style>
  
  <body>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <h1 style="color: #22859E;" id="title">Timezone Converter</h1>
    <div id="container">
      <div id="timezones">
        <div class="timezone" id="shape">
          <label for="datetime">
            <h3>Date and Time:</h3>
          </label>
          <input type="datetime-local" bind:value={currentDateTime} id="datetime">
        </div>
      </div>
      <div>
        <div id="addedTimezones">
          {#each selectedTimezones.sort() as timezone, index}
  <div class="timezone-box">
    <label for={"timezone" + index}>Timezone {index + 1}:</label>
    <select bind:value={selectedTimezones[index]}>
      <option value="" disabled>Select timezone</option>
      {#each sortedTimezones as sortedTimezone}
        <option value={sortedTimezone}>{sortedTimezone}</option>
      {/each}
    </select>
    <button on:click={() => deleteTimezone(index)} class="deleteBtn">
      <i class="fas fa-trash"></i>
    </button>
  </div>
  {/each}
        </div>
        <button on:click={addTimezone} class="button1">
          <h3>Add Timezone</h3>
        </button>
        <button on:click={convertTimezones} class="button2">
          <h3>Convert Timezones</h3>
        </button>
      </div>
      <div id="result">
        {#if convertedTimes.length > 0}
        <div class="result-box">
          <h3>Converted Times:</h3>
          <ul>
            {#each convertedTimes as { timezone, convertedDate }}
            <li>
              <strong>{timezone}:</strong> {convertedDate}
            </li>
            {/each}
          </ul>
        </div>
        {/if}
      </div>
    </div>
  </body>