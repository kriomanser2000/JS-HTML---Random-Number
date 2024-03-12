document.getElementById('genBtn').addEventListener('click', function()
{
    var randomNum = Math.floor(Math.random() * 101);
    document.getElementById('result').textContent = 'Random Number: ' + randomNum;
});