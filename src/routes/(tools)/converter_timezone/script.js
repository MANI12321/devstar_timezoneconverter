let timezoneCount = 0;

function addTimezone() {
    if (timezoneCount < 7) {
        const newTimezoneDiv = document.createElement('div');
        newTimezoneDiv.className = 'timezone';
        newTimezoneDiv.id = `timezoneDiv${timezoneCount}`;
        const options = `
            <option value="" disabled selected hidden>Select timezone</option>
            <option value="UTC">UTC</option>
            <option value="America/New_York">America/New_York</option>
            <option value="Europe/London">Europe/London</option>
            <option value="Asia/Tokyo">Asia/Tokyo</option>
            <option value="Australia/Sydney">Australia/Sydney</option>
            <!-- Add more timezones as needed -->
        `;
        const sortedOptions = options
            .trim()
            .split('\n')
            .map((line) => line.trim())
            .filter((line) => line.startsWith('<option'))
            .sort((a, b) => {
                const cityA = a.substring(a.indexOf('>') + 1, a.lastIndexOf('<'));
                const cityB = b.substring(b.indexOf('>') + 1, b.lastIndexOf('<'));
                return cityA.localeCompare(cityB);
            })
            .join('\n');

        newTimezoneDiv.innerHTML = `
        <div class="timezone-box">
            <label for="timezone${timezoneCount + 1}">Timezone ${timezoneCount + 1}:</label>
            <select id="timezone${timezoneCount + 1}">
                ${sortedOptions}
            </select>
            <button class="deleteBtn" onclick="deleteTimezone('timezoneDiv${timezoneCount}')"><i class="fa-solid fa-trash">\t Delete</i></button>
            </div>
        `;
        document.getElementById('addedTimezones').appendChild(newTimezoneDiv);
        timezoneCount++;
        if (timezoneCount === 7) {
            document.getElementById('addButton').disabled = true;
        }
    }
}

function deleteTimezone(id) {
    const element = document.getElementById(id);
    element.parentNode.removeChild(element);
    timezoneCount--;
    document.getElementById('addButton').disabled = false;
}

const timeZoneCityMap = {
UTC: "UTC",
"America/New_York": "New York",
"Europe/London": "London",
"Asia/Tokyo": "Tokyo",
"Australia/Sydney": "Sydney"
// Add more mappings as needed
};

function convertTimezones() {
// Get selected timezones and times
const timezones = [];
const cityNames = [];
timezones.push(document.getElementById('timezone1').value);
cityNames.push(timeZoneCityMap[document.getElementById('timezone1').value]);
for (let i = 1; i < timezoneCount; i++) {
const currentId = `timezone${i + 1}`;
timezones.push(document.getElementById(currentId).value);
cityNames.push(timeZoneCityMap[document.getElementById(currentId).value]);
}
const datetime = new Date(document.getElementById("datetime").value);

// Display the result
let resultText = "<div class='result-box'><h3>Converted Times:</h3><ul>";
    timezones.forEach((timezone, index) => {
        const convertedDate = new Date(datetime.toLocaleString('en-US', { timeZone: timezone }));
        resultText += `<li><strong>${cityNames[index]}:</strong> ${convertedDate.toLocaleString()}</li>`;
    });
    resultText += "</ul></div>";
    document.getElementById("result").innerHTML = resultText;
}

// Automatically set current date and time
const now = new Date();
const year = now.getFullYear();
const month = `${(now.getMonth() + 1)}`.padStart(2, '0');
const day = `${now.getDate()}`.padStart(2, '0');
const hours = `${now.getHours()}`.padStart(2, '0');
const minutes = `${now.getMinutes()}`.padStart(2, '0');
document.getElementById('datetime').value = `${year}-${month}-${day}T${hours}:${minutes}`;
