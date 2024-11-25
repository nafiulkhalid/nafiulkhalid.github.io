
// Fetch Miami Local Time
document.addEventListener("DOMContentLoaded", function(){
    function updateTime(){
        const miamiTime = new Date().toLocaleString("en-US", {
            timeZone: "America/New_York",
            hour: "2-digit",
            minute: "2-digit",
            hour12: true
        });
        document.getElementById("local-time").textContent = "My Local Time: " + miamiTime;
    }
    updateTime();
    setInterval(updateTime, 60000);
});